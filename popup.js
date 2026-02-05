let oldTabs = [];

// Load and display tabs
async function loadTabs() {
  chrome.runtime.sendMessage({ action: 'getOldTabs' }, (response) => {
    oldTabs = response.tabs;
    displayTabs();
  });
}

// Display tabs grouped by age
function displayTabs() {
  const tabsList = document.getElementById('tabsList');
  const emptyState = document.getElementById('emptyState');
  const actions = document.getElementById('actions');
  
  if (oldTabs.length === 0) {
    emptyState.classList.add('visible');
    actions.classList.remove('visible');
    tabsList.innerHTML = '';
    return;
  }
  
  emptyState.classList.remove('visible');
  actions.classList.add('visible');
  
  // Group tabs by age
  const now = Date.now();
  const groups = {
    '30+ days': [],
    '14-30 days': [],
    '7-14 days': [],
    '3-7 days': [],
    '1-3 days': []
  };
  
  oldTabs.forEach(tab => {
    const ageInDays = (now - tab.timestamp) / (1000 * 60 * 60 * 24);
    
    if (ageInDays >= 30) {
      groups['30+ days'].push(tab);
    } else if (ageInDays >= 14) {
      groups['14-30 days'].push(tab);
    } else if (ageInDays >= 7) {
      groups['7-14 days'].push(tab);
    } else if (ageInDays >= 3) {
      groups['3-7 days'].push(tab);
    } else {
      groups['1-3 days'].push(tab);
    }
  });
  
  // Render groups
  tabsList.innerHTML = '';
  
  Object.entries(groups).forEach(([groupName, tabs]) => {
    if (tabs.length === 0) return;
    
    const groupDiv = document.createElement('div');
    groupDiv.className = 'age-group';
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'age-group-title';
    titleDiv.textContent = `${groupName} (${tabs.length})`;
    groupDiv.appendChild(titleDiv);
    
    tabs.forEach(tab => {
      groupDiv.appendChild(createTabElement(tab));
    });
    
    tabsList.appendChild(groupDiv);
  });
}

// Create tab element
function createTabElement(tab) {
  const tabDiv = document.createElement('div');
  tabDiv.className = 'tab-item';
  
  // Favicon
  const favicon = document.createElement('img');
  favicon.className = 'tab-favicon';
  favicon.src = tab.favIconUrl || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23666"/></svg>';
  favicon.onerror = () => {
    favicon.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23666"/></svg>';
  };
  tabDiv.appendChild(favicon);
  
  // Tab info
  const infoDiv = document.createElement('div');
  infoDiv.className = 'tab-info';
  
  const titleDiv = document.createElement('div');
  titleDiv.className = 'tab-title';
  titleDiv.textContent = tab.title || 'Untitled';
  infoDiv.appendChild(titleDiv);
  
  const urlDiv = document.createElement('div');
  urlDiv.className = 'tab-url';
  urlDiv.textContent = new URL(tab.url).hostname;
  infoDiv.appendChild(urlDiv);
  
  tabDiv.appendChild(infoDiv);
  
  // Age
  const ageDiv = document.createElement('div');
  ageDiv.className = 'tab-age';
  const ageInDays = Math.floor((Date.now() - tab.timestamp) / (1000 * 60 * 60 * 24));
  ageDiv.textContent = `${ageInDays}d`;
  tabDiv.appendChild(ageDiv);
  
  // Dismiss button
  const dismissBtn = document.createElement('button');
  dismissBtn.className = 'dismiss-btn';
  dismissBtn.textContent = '×';
  dismissBtn.title = 'Keep this tab';
  dismissBtn.onclick = (e) => {
    e.stopPropagation();
    dismissTab(tab.id);
  };
  tabDiv.appendChild(dismissBtn);
  
  // Click to focus tab
  tabDiv.onclick = () => {
    chrome.tabs.update(tab.id, { active: true });
    chrome.windows.update(tab.windowId, { focused: true });
  };
  
  return tabDiv;
}

// Dismiss a tab (mark as fresh)
function dismissTab(tabId) {
  chrome.runtime.sendMessage({ action: 'dismissTab', tabId }, () => {
    loadTabs();
  });
}

// Close all old tabs
document.getElementById('closeBtn').addEventListener('click', () => {
  if (confirm(`Close ${oldTabs.length} old tabs?`)) {
    const tabIds = oldTabs.map(tab => tab.id);
    chrome.runtime.sendMessage({ action: 'closeTabs', tabIds }, () => {
      loadTabs();
    });
  }
});

// Save and close all old tabs
document.getElementById('saveAndCloseBtn').addEventListener('click', () => {
  if (confirm(`Save ${oldTabs.length} tabs as bookmarks and close them?`)) {
    const tabIds = oldTabs.map(tab => tab.id);
    chrome.runtime.sendMessage({ 
      action: 'saveAndCloseTabs', 
      tabs: oldTabs,
      tabIds 
    }, () => {
      loadTabs();
    });
  }
});

// Settings button
document.getElementById('settingsBtn').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});

// Load tabs on popup open
loadTabs();
