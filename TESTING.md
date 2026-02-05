# Testing Guide

## Quick Test

1. **Install the extension**
   - Go to `chrome://extensions/`
   - Enable Developer mode
   - Load unpacked → select this folder
   
2. **Generate test tabs**
   - Open 10-15 random tabs
   - The extension will track them automatically
   
3. **Simulate old tabs** (for testing)
   - Open DevTools on the extension background page
   - Run: `chrome.storage.local.get(['tabTimestamps'], (r) => console.log(r))`
   - Manually edit timestamps to make tabs appear old
   
4. **Test the UI**
   - Badge should show count of old tabs
   - Popup should group them by age
   - Test dismiss function (× button)
   - Test "Save & Close All"
   - Test "Close All"
   
5. **Check bookmarks**
   - Go to `chrome://bookmarks/`
   - Look in "Other Bookmarks > Tab Bankruptcy"
   - Should see dated folder with saved tabs

## Edge Cases

- Try with 0 tabs (should show empty state)
- Try with very old tabs (30+ days)
- Try dismissing all tabs (badge should clear)
- Try changing settings (badge should update)
- Close extension and reopen (should persist)

## Manual Timestamp Editing (for testing)

```javascript
// In extension background page DevTools console:

// Get current tabs
chrome.tabs.query({}, (tabs) => {
  // Make first 5 tabs appear 10 days old
  chrome.storage.local.get(['tabTimestamps'], (result) => {
    const timestamps = result.tabTimestamps || {};
    const tenDaysAgo = Date.now() - (10 * 24 * 60 * 60 * 1000);
    
    tabs.slice(0, 5).forEach(tab => {
      timestamps[tab.id] = tenDaysAgo;
    });
    
    chrome.storage.local.set({ tabTimestamps: timestamps }, () => {
      console.log('Updated timestamps for testing');
      chrome.action.setBadgeText({ text: '5' });
      chrome.action.setBadgeBackgroundColor({ color: '#10b981' });
    });
  });
});
```

## Known Limitations

- Tab age tracking starts when extension is installed
- Tabs opened before installation are marked as "created now"
- Extension doesn't track tabs in incognito mode (by design)
- Timestamp resets on navigation (considers it a "new" tab)

## Performance

- Minimal memory footprint
- Badge updates once per minute
- No network requests
- All data stored locally

---

**Next Steps**: Take screenshots for README and submit to Chrome Web Store
