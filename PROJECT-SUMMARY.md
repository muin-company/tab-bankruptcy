# Tab Bankruptcy - Project Summary

**Status**: ✅ Complete and deployed  
**Repository**: https://github.com/muin-company/tab-bankruptcy  
**License**: MIT  
**Lines of Code**: ~1,100

## What Was Built

A Chrome extension (Manifest V3) that helps users "declare tab bankruptcy" by closing all tabs older than a configurable threshold, with optional bookmarking.

## Core Features Implemented

✅ **Badge Counter** - Shows count of old tabs  
✅ **Grouped Tab View** - Tabs organized by age (1-3d, 3-7d, 7-14d, 14-30d, 30+d)  
✅ **Bulk Close** - "Close All" and "Save & Close All" buttons  
✅ **Individual Dismiss** - Mark specific tabs as fresh (× button)  
✅ **Settings Page** - Configure age threshold and auto-bookmark preference  
✅ **Bookmark Integration** - Saves to "Tab Bankruptcy > Bankruptcy YYYY-MM-DD"  
✅ **Persistent Tracking** - Tab timestamps survive browser restarts  

## Technical Stack

- **Manifest V3** (Chrome's latest extension architecture)
- **Vanilla JavaScript** - No frameworks, no build process
- **Local Storage** - All data stays on device
- **Chrome APIs**: tabs, storage, bookmarks, action (badge)

## File Structure

```
tab-bankruptcy/
├── manifest.json          # Extension configuration
├── background.js          # Service worker (tab tracking, badge updates)
├── popup.html/css/js      # Main UI (tab list, actions)
├── settings.html/css/js   # Settings page
├── icons/                 # PNG icons (16, 32, 48, 128)
├── docs/
│   └── style-guide.md     # Design principles
├── README.md              # Installation & usage
├── TESTING.md             # Testing guide
├── TODO.md                # Future enhancements
└── LICENSE                # MIT

Total: ~1,100 LOC
```

## Design Principles

Following `docs/style-guide.md`:
- **No AI vibes** - Human, direct copy
- **Dark theme** - #1a1a1a background
- **Green accent** - #10b981 (no blue!)
- **Inter font** - Clean, modern typography
- **Minimal UI** - No unnecessary decoration

## Installation

```bash
# Clone
git clone https://github.com/muin-company/tab-bankruptcy.git

# Load in Chrome
1. Go to chrome://extensions/
2. Enable Developer mode
3. Load unpacked → select folder
```

## How It Works

1. **Tracking**: Background service worker monitors tab creation/navigation
2. **Storage**: Timestamps saved in `chrome.storage.local`
3. **Badge**: Updates every minute with count of old tabs
4. **UI**: Popup queries background for old tabs, groups by age
5. **Actions**: Close tabs directly or bookmark first
6. **Dismiss**: Updates timestamp to mark tab as fresh

## Next Steps

- [ ] Take screenshots for README
- [ ] Submit to Chrome Web Store
- [ ] Share on Product Hunt, Reddit, Twitter

## Development Notes

- Built in ~1 hour
- Zero external dependencies
- All code hand-written (no boilerplate generators)
- Follows Chrome's best practices for MV3
- Privacy-first: no analytics, no network requests

---

**Built**: February 5, 2026  
**Developer**: Muin (AI agent)  
**For**: Anyone drowning in tabs
