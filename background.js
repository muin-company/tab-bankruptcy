// Track when tabs are created/updated
const tabTimestamps = new Map();

// Default settings
const DEFAULT_SETTINGS = {
  ageThresholdDays: 7,
  autoBookmark: true
};

// Initialize on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['settings'], (result) => {
    if (!result.settings) {
      chrome.storage.local.set({ settings: DEFAULT_SETTINGS });
    }
  });
  updateBadge();
});

// Track new tabs
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.id) {
    tabTimestamps.set(tab.id, Date.now());
    saveTimestamps();
    updateBadge();
  }
});

// Track tab updates (e.g., navigation)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    tabTimestamps.set(tabId, Date.now());
    saveTimestamps();
    updateBadge();
  }
});

// Clean up closed tabs
chrome.tabs.onRemoved.addListener((tabId) => {
  tabTimestamps.delete(tabId);
  saveTimestamps();
  updateBadge();
});

// Load timestamps from storage on startup
chrome.storage.local.get(['tabTimestamps'], (result) => {
  if (result.tabTimestamps) {
    Object.entries(result.tabTimestamps).forEach(([id, timestamp]) => {
      tabTimestamps.set(parseInt(id), timestamp);
    });
  }
  
  // Initialize timestamps for existing tabs
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      if (!tabTimestamps.has(tab.id)) {
        tabTimestamps.set(tab.id, Date.now());
      }
    });
    saveTimestamps();
    updateBadge();
  });
});

// Save timestamps to storage
function saveTimestamps() {
  const obj = Object.fromEntries(tabTimestamps);
  chrome.storage.local.set({ tabTimestamps: obj });
}

// Update badge with count of old tabs
async function updateBadge() {
  const settings = await getSettings();
  const oldTabs = await getOldTabs(settings.ageThresholdDays);
  
  if (oldTabs.length > 0) {
    chrome.action.setBadgeText({ text: oldTabs.length.toString() });
    chrome.action.setBadgeBackgroundColor({ color: '#10b981' });
  } else {
    chrome.action.setBadgeText({ text: '' });
  }
}

// Get settings
function getSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['settings'], (result) => {
      resolve(result.settings || DEFAULT_SETTINGS);
    });
  });
}

// Get old tabs
async function getOldTabs(ageThresholdDays) {
  const cutoffTime = Date.now() - (ageThresholdDays * 24 * 60 * 60 * 1000);
  const tabs = await chrome.tabs.query({});
  
  return tabs.filter(tab => {
    const timestamp = tabTimestamps.get(tab.id) || Date.now();
    return timestamp < cutoffTime;
  }).map(tab => ({
    ...tab,
    timestamp: tabTimestamps.get(tab.id) || Date.now()
  }));
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getOldTabs') {
    getSettings().then(settings => {
      getOldTabs(settings.ageThresholdDays).then(tabs => {
        sendResponse({ tabs });
      });
    });
    return true;
  }
  
  if (request.action === 'closeTab') {
    chrome.tabs.remove(request.tabId, () => {
      updateBadge();
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (request.action === 'closeTabs') {
    chrome.tabs.remove(request.tabIds, () => {
      updateBadge();
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (request.action === 'saveAndCloseTabs') {
    saveTabsAsBookmarks(request.tabs).then(() => {
      chrome.tabs.remove(request.tabIds, () => {
        updateBadge();
        sendResponse({ success: true });
      });
    });
    return true;
  }
  
  if (request.action === 'dismissTab') {
    // Update timestamp to now (marks as "fresh")
    tabTimestamps.set(request.tabId, Date.now());
    saveTimestamps();
    updateBadge();
    sendResponse({ success: true });
    return true;
  }
});

// Save tabs as bookmarks
async function saveTabsAsBookmarks(tabs) {
  // Create or find "Tab Bankruptcy" folder
  const bookmarkTree = await chrome.bookmarks.getTree();
  let bankruptcyFolder = await findBookmarkFolder(bookmarkTree, 'Tab Bankruptcy');
  
  if (!bankruptcyFolder) {
    bankruptcyFolder = await chrome.bookmarks.create({
      parentId: '1', // Other bookmarks
      title: 'Tab Bankruptcy'
    });
  }
  
  // Create dated subfolder
  const date = new Date().toISOString().split('T')[0];
  const dateFolder = await chrome.bookmarks.create({
    parentId: bankruptcyFolder.id,
    title: `Bankruptcy ${date}`
  });
  
  // Save all tabs
  for (const tab of tabs) {
    await chrome.bookmarks.create({
      parentId: dateFolder.id,
      title: tab.title,
      url: tab.url
    });
  }
}

// Find bookmark folder by name
function findBookmarkFolder(nodes, title) {
  for (const node of nodes) {
    if (node.title === title && !node.url) {
      return node;
    }
    if (node.children) {
      const found = findBookmarkFolder(node.children, title);
      if (found) return found;
    }
  }
  return null;
}

// Update badge periodically
setInterval(updateBadge, 60000); // Every minute
