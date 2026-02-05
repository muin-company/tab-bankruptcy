// Load settings on page load
chrome.storage.local.get(['settings'], (result) => {
  const settings = result.settings || {
    ageThresholdDays: 7,
    autoBookmark: true
  };
  
  document.getElementById('ageThreshold').value = settings.ageThresholdDays;
  document.getElementById('autoBookmark').checked = settings.autoBookmark;
});

// Save settings
document.getElementById('saveBtn').addEventListener('click', () => {
  const settings = {
    ageThresholdDays: parseInt(document.getElementById('ageThreshold').value),
    autoBookmark: document.getElementById('autoBookmark').checked
  };
  
  chrome.storage.local.set({ settings }, () => {
    showNotification('Settings saved!');
    
    // Trigger badge update
    chrome.runtime.sendMessage({ action: 'getOldTabs' });
  });
});

// Show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}
