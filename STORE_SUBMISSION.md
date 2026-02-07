# Chrome Web Store Submission Guide - Tab Bankruptcy

## 1. Store Listing

### Name
**Tab Bankruptcy**

### Short Description (132 chars max)
Close all tabs older than X days, with option to save as bookmarks first. Reclaim your browser from tab overload.
*(119 characters)*

### Detailed Description

Declare tab bankruptcy and start fresh! Tab Bankruptcy helps you manage overwhelming tab counts by automatically tracking tab age and letting you bulk-close old tabs with a single click.

**Perfect for anyone who:**
- Has dozens (or hundreds) of tabs open
- Loses track of important tabs in the clutter
- Wants to reduce browser memory usage
- Needs a clean slate without losing important links

**Key Features:**
• Badge counter showing how many old tabs you have
• Age grouping - see tabs organized by age (1-3 days, 3-7 days, 7-14 days, etc.)
• Bulk close - close all old tabs with one click
• Save first - bookmark all old tabs before closing (recommended!)
• Individual dismiss - keep specific tabs by marking them as "fresh"
• Configurable threshold - choose when tabs are considered "old" (3/7/14/30 days)

**How It Works:**
1. The extension tracks when each tab is created or navigated
2. When a tab's age exceeds your threshold, it's flagged as "old"
3. Click the extension icon to see all old tabs grouped by age
4. Choose to "Save & Close All" (bookmarks + closes) or "Close All"
5. Bookmarks are saved in dated folders: "Tab Bankruptcy > Bankruptcy YYYY-MM-DD"

**Privacy First:**
All data is stored locally on your device. Nothing is sent to external servers. The extension only needs access to tabs, bookmarks, and local storage to function.

**Use Cases:**
- Weekly tab hygiene routine (every Monday morning cleanup)
- Post-conference/research cleanup (save links for later review)
- Context switching between projects (archive old project tabs)
- Browser performance optimization (reduce memory usage)

**Lightweight & Fast:**
Built with Manifest V3 (latest Chrome extension architecture), pure vanilla JavaScript, no external dependencies. Minimal resource usage.

Perfect for knowledge workers, researchers, developers, and anyone who tends to accumulate tabs!

### Category
**Productivity**

### Language
**English (United States)**

---

## 2. Assets Needed

### Icon ✅
- **File:** `icons/icon128.png`
- **Size:** 128x128 PNG
- **Status:** Already exists in repo

### Screenshots (Required: at least 1, recommended: 3-5)
**Dimensions:** 1280x800 or 640x400 (16:10 ratio recommended)

#### Screenshot 1: Main Popup - Old Tabs Grouped by Age
**Capture:**
1. Open Chrome with 20+ tabs (some 1 day old, some 7+ days old)
2. Click the Tab Bankruptcy extension icon
3. Show popup with tabs grouped by age categories
4. Badge should show number of old tabs (e.g., "37")

**What to show:**
- Extension popup open
- Tabs grouped into age buckets (e.g., "3-7 days: 12 tabs", "7-14 days: 25 tabs")
- Individual tabs listed with titles and URLs
- "Save & Close All" and "Close All" buttons visible
- Settings gear icon visible

**Caption:** "See all old tabs organized by age - one-click cleanup"

---

#### Screenshot 2: Settings Page
**Capture:**
1. Click settings icon in popup
2. Show settings page with options

**What to show:**
- Age threshold dropdown (3/7/14/30 days)
- "Auto-bookmark before closing" checkbox (enabled)
- Clean, simple settings interface

**Caption:** "Configure age threshold and auto-bookmark preferences"

---

#### Screenshot 3: Badge Counter
**Capture:**
1. Zoom in on Chrome toolbar showing extension icon
2. Badge should display number (e.g., "47")
3. Show it in context with other extension icons

**What to show:**
- Extension icon with red badge number
- Clear view of the toolbar

**Caption:** "Always know how many old tabs you have at a glance"

---

#### Screenshot 4: Bookmark Organization (Optional)
**Capture:**
1. Open Chrome bookmarks manager (Cmd/Ctrl + Shift + O)
2. Navigate to "Other Bookmarks > Tab Bankruptcy"
3. Show dated folders (e.g., "Bankruptcy 2026-02-06", "Bankruptcy 2026-02-01")
4. Expand one folder to show saved tabs

**What to show:**
- Bookmark manager with Tab Bankruptcy folders
- Multiple dated folders showing history of bankruptcies
- Expanded folder with saved tab bookmarks

**Caption:** "All closed tabs safely bookmarked in dated folders"

---

#### Screenshot 5: Before/After (Optional but powerful)
**Capture:**
Create a side-by-side or before/after comparison:
- **Before:** Chrome with 100+ tabs, crowded tab bar
- **After:** Chrome with 15 tabs, clean tab bar
- Text overlay: "89 tabs closed & bookmarked"

**What to show:**
- Visual impact of using Tab Bankruptcy
- Crowded tabs → clean tabs

**Caption:** "Reclaim your browser from tab overload"

---

### Promotional Images (Optional but recommended)

#### Small Tile: 440x280 PNG
- Extension icon on left
- Text: "Tab Bankruptcy - Declare tab freedom"
- Subtitle: "Close old tabs, save as bookmarks"

#### Large Tile: 920x680 PNG
- Hero image showing extension in action
- Key feature callouts (badge, grouping, bookmarks)

#### Marquee: 1400x560 PNG
- Wide banner for featured placement
- Tagline: "Take back control of your browser"

---

## 3. Privacy

### Permissions Justification

**tabs**
- Required to: List all open tabs, check tab URLs and titles, detect tab age
- Used for: Tracking tab creation time, displaying old tabs in popup, closing tabs on user request
- Data collected: Tab URLs, titles, and creation timestamps (stored locally only)

**storage**
- Required to: Save user preferences and tab metadata
- Used for: Storing age threshold setting, auto-bookmark preference, and tab age tracking data
- Data collected: User settings and tab age information (stored locally only)

**bookmarks**
- Required to: Create bookmarks when user clicks "Save & Close"
- Used for: Creating bookmark folders and saving tab URLs before closing
- Data collected: None - only writes bookmarks when user explicitly requests it

### Privacy Policy

**Tab Bankruptcy Privacy Policy**

**Last Updated:** February 7, 2026

**Data Collection:**
Tab Bankruptcy collects and stores the following data locally on your device:
- Tab URLs and titles (for displaying in popup)
- Tab creation timestamps (for age calculation)
- User preferences (age threshold, auto-bookmark setting)

**Data Usage:**
All data is used solely to provide the extension's functionality (tracking tab age, organizing tabs, creating bookmarks).

**Data Storage:**
All data is stored locally using Chrome's storage API. No data is transmitted to external servers or third parties.

**Data Sharing:**
We do not share, sell, or transmit any user data. The extension operates entirely offline.

**User Control:**
Users can uninstall the extension at any time to remove all stored data. Clearing Chrome extension data will also remove all settings and tab age tracking.

**Contact:**
For privacy questions, contact us at: privacy@muin.company

---

**Privacy Policy URL:** 
Create a static page at one of:
- `https://muin.company/privacy/tab-bankruptcy`
- `https://github.com/muin-company/tab-bankruptcy/blob/main/PRIVACY.md`
- Host on GitHub Pages or simple static host

*(Create PRIVACY.md file in repo with above content)*

---

### Data Usage Disclosure

**Single Purpose Description:**
Tab Bankruptcy helps users manage browser tab overload by tracking tab age and enabling bulk closure with optional bookmark backup.

**Permissions Use:**
- **tabs:** Read tab information (URL, title) to track age and display in popup. Close tabs when user requests.
- **storage:** Save user preferences (age threshold, auto-bookmark) and tab age metadata locally.
- **bookmarks:** Create bookmark folders and save tab URLs when user chooses "Save & Close."

**Certification:**
- ✅ Extension does not collect or transmit user data
- ✅ All data stored locally
- ✅ No remote code execution
- ✅ No cryptocurrency mining
- ✅ Complies with Chrome Web Store policies

---

## 4. Submission Checklist

### Pre-Submission

- [ ] **manifest.json version updated**
  - Current version: `1.0.0`
  - For first submission, keep as `1.0.0`
  - For updates, increment to `1.0.1`, `1.1.0`, etc.

- [ ] **Code review**
  - [ ] No console.log statements in production code
  - [ ] All permissions are justified and necessary
  - [ ] Code follows Chrome extension best practices
  - [ ] Manifest V3 compliant

- [ ] **Testing**
  - [ ] Tested on latest Chrome version
  - [ ] Tested with 0 tabs, 1 tab, 100+ tabs
  - [ ] Tested all age thresholds (3/7/14/30 days)
  - [ ] Tested "Save & Close All" creates correct bookmarks
  - [ ] Tested "Close All" without bookmarking
  - [ ] Tested settings persistence
  - [ ] Tested badge counter updates correctly

### Assets Preparation

- [ ] **Screenshots captured**
  - [ ] Screenshot 1: Main popup with old tabs
  - [ ] Screenshot 2: Settings page
  - [ ] Screenshot 3: Badge counter
  - [ ] Screenshot 4 (optional): Bookmarks folder
  - [ ] Screenshot 5 (optional): Before/after
  - [ ] All screenshots are 1280x800 or 640x400
  - [ ] Screenshots show real, helpful UI (not placeholders)

- [ ] **Privacy policy created**
  - [ ] PRIVACY.md file created in repo
  - [ ] Privacy policy published at public URL
  - [ ] Privacy policy URL ready for submission form

- [ ] **ZIP file created**
  ```bash
  cd ~/muin/projects/tab-bankruptcy
  zip -r tab-bankruptcy-v1.0.0.zip . \
    -x "*.git*" \
    -x "*node_modules*" \
    -x "*.DS_Store" \
    -x "*STORE_SUBMISSION.md" \
    -x "*TODO.md" \
    -x "*TESTING.md" \
    -x "*PROJECT-SUMMARY.md" \
    -x "docs/*"
  ```
  - [ ] ZIP file created
  - [ ] ZIP file size < 100MB (should be <1MB for this extension)
  - [ ] Verified ZIP contents (unzip and check)

### Developer Account

- [ ] **Chrome Web Store developer account**
  - [ ] Account created at [chrome.google.com/webstore/devconsole](https://chrome.google.com/webstore/devconsole)
  - [ ] $5 one-time registration fee paid (if not already)
  - [ ] Payment method on file (for potential paid features in future)

### Submission

- [ ] **Upload to Chrome Web Store**
  1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
  2. Click "New Item"
  3. Upload `tab-bankruptcy-v1.0.0.zip`
  4. Fill in store listing (copy from Section 1 above)
  5. Upload screenshots
  6. Enter privacy policy URL
  7. Select category: Productivity
  8. Set pricing: Free
  9. Set regions: All regions
  10. Submit for review

- [ ] **Post-submission**
  - [ ] Review submitted successfully (confirmation email)
  - [ ] Extension URL saved (will be `https://chrome.google.com/webstore/detail/[extension-id]`)
  - [ ] Estimated review time: 1-3 business days
  - [ ] Monitor dashboard for review status

---

## 5. Post-Publication

### Update README.md
Once published, update README.md with:
```markdown
## Installation

### Chrome Web Store (Recommended)

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/[extension-id])

### From Source
...
```

### Marketing
- [ ] Tweet about launch
- [ ] Post on Reddit (r/chrome, r/productivity)
- [ ] Share in relevant communities
- [ ] Add to portfolio/website

### Monitor
- [ ] Check reviews daily (first week)
- [ ] Respond to user feedback
- [ ] Monitor error reports in dashboard
- [ ] Track install count

---

## 6. Future Updates

When releasing updates:
1. Increment version in `manifest.json` (e.g., `1.0.0` → `1.0.1`)
2. Create new ZIP file
3. Upload to existing extension in dashboard (don't create new item)
4. Add "What's New" section describing changes
5. Submit for review

**Versioning:**
- Patch (1.0.x): Bug fixes
- Minor (1.x.0): New features
- Major (x.0.0): Breaking changes

---

## Quick Start Commands

```bash
# Create ZIP for submission
cd ~/muin/projects/tab-bankruptcy
zip -r ../tab-bankruptcy-v1.0.0.zip . \
  -x "*.git*" -x "*node_modules*" -x "*.DS_Store" \
  -x "*STORE_SUBMISSION.md" -x "*TODO.md" -x "*TESTING.md" \
  -x "*PROJECT-SUMMARY.md" -x "docs/*"

# Verify ZIP contents
unzip -l ../tab-bankruptcy-v1.0.0.zip

# Create privacy policy file
echo "# Tab Bankruptcy Privacy Policy..." > PRIVACY.md
git add PRIVACY.md
git commit -m "Add privacy policy for Chrome Web Store submission"
git push
```

---

## Resources

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Extension Publishing Guide](https://developer.chrome.com/docs/webstore/publish/)
- [Store Listing Best Practices](https://developer.chrome.com/docs/webstore/best_practices/)
- [Branding Guidelines](https://developer.chrome.com/docs/webstore/branding/)
- [Review Process](https://developer.chrome.com/docs/webstore/review-process/)

---

**Ready to submit!** Follow the checklist above and you'll be live on the Chrome Web Store soon. 🚀
