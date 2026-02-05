# Tab Bankruptcy

Declare tab bankruptcy - close all tabs older than X days, with the option to save them as bookmarks first.

## What it does

Tab Bankruptcy helps you manage tab overload by tracking how old your tabs are and letting you bulk-close them. It's for anyone who's ever had dozens (or hundreds) of tabs open and just wanted to start fresh.

## Features

- **Badge counter** - Shows how many old tabs you have at a glance
- **Age grouping** - Tabs organized by age (1-3 days, 3-7 days, 7-14 days, etc.)
- **Bulk close** - Close all old tabs with one click
- **Save first** - Bookmark all old tabs before closing (recommended!)
- **Individual dismiss** - Keep specific tabs by marking them as "fresh"
- **Configurable threshold** - Choose when tabs are considered "old" (3/7/14/30 days)

## Installation

### Load Unpacked (Development)

1. Clone this repository:
   ```bash
   git clone https://github.com/muin-company/tab-bankruptcy.git
   cd tab-bankruptcy
   ```

2. Open Chrome and go to `chrome://extensions/`

3. Enable "Developer mode" (toggle in top right)

4. Click "Load unpacked" and select the `tab-bankruptcy` folder

5. The extension is now installed! Look for the icon in your toolbar.

### Chrome Web Store

*Coming soon*

## Usage

### First time setup

1. Click the extension icon - it will show "No old tabs" initially
2. Click the settings icon (⚙️) to configure:
   - **Age threshold**: When tabs are considered "old" (default: 7 days)
   - **Auto-bookmark**: Save tabs as bookmarks before closing (recommended)

### Daily use

1. The badge shows how many old tabs you have
2. Click the icon to see them grouped by age
3. Options:
   - **Save & Close All**: Bookmarks all old tabs, then closes them
   - **Close All**: Closes without saving (careful!)
   - **Dismiss individual tab**: Click the × to mark it as fresh
   - **Switch to tab**: Click any tab in the list to switch to it

### Where are bookmarks saved?

Bookmarks are saved in:
```
Other Bookmarks > Tab Bankruptcy > Bankruptcy YYYY-MM-DD
```

Each time you use "Save & Close," a new dated folder is created.

## Technical Details

- **Manifest V3** - Uses the latest Chrome extension architecture
- **No external dependencies** - Pure vanilla JS, no frameworks
- **Privacy-first** - All data stored locally, nothing sent to servers
- **Lightweight** - Minimal resource usage

## How it works

The extension tracks when each tab is created or navigated to a new URL. When a tab's age exceeds your threshold, it's flagged as "old" and appears in the popup. You can then bulk-close them or dismiss individual tabs to keep them.

## Development

Built with:
- Chrome Extensions Manifest V3
- Vanilla JavaScript
- No build process required

## Screenshots

*Screenshots coming soon*

## License

MIT License - see [LICENSE](LICENSE) for details

## Credits

Built by [Muin](https://github.com/muin-company)

---

**Tip**: Start with a 7-day threshold and adjust based on your browsing habits. Most people find 7-14 days is the sweet spot.
