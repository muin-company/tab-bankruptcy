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

## Real-World Examples

### Example 1: The Research Rabbit Hole

**Scenario:** You went down a research rabbit hole 2 weeks ago, opened 50 tabs, and haven't touched them since.

**Before:**
- 127 tabs open
- Chrome using 4GB RAM
- Can't find the tabs you actually need
- Browser feels slow

**After using Tab Bankruptcy:**
```
1. Click extension icon
   → Badge shows: 89 old tabs

2. Review old tabs by age:
   - 14+ days: 43 tabs (research from 2 weeks ago)
   - 7-14 days: 31 tabs (random articles)
   - 3-7 days: 15 tabs (still relevant, keep these)

3. Click "Save & Close All"
   → 89 tabs bookmarked to "Bankruptcy 2026-02-06"
   → Browser down to 38 tabs
   → RAM usage drops to 1.2GB

4. Result:
   ✅ Clean browser
   ✅ Research saved for later
   ✅ Can actually find important tabs
```

**The bookmarks:**
```
Other Bookmarks
└── Tab Bankruptcy
    └── Bankruptcy 2026-02-06
        ├── "How to train LLMs" (reddit.com)
        ├── "PyTorch documentation" (pytorch.org)
        ├── "BERT paper" (arxiv.org)
        └── ... 86 more tabs
```

**When to revisit:** When you need that research again, all links are in one dated folder.

---

### Example 2: Post-Conference Tab Cleanup

**Scenario:** Attended a tech conference, opened a bunch of speaker websites, GitHub repos, product demos. Conference was last week.

**Setup:**
1. Set threshold to **3 days**
2. Enable "Auto-bookmark"

**Process:**
```
Day 1 (conference):
  - Opened 40 tabs during talks
  - Badge: 0 old tabs

Day 4 (after conference):
  - Click extension icon
  - Badge shows: 37 old tabs
  
  Review:
  - Dismiss 3 tabs you're actively using (speaker's GitHub repo)
  - Click "Save & Close All"
  - 34 tabs → Bookmarks folder "Bankruptcy 2026-02-09"
  - Browser clean again
```

**Result:**
- Conference links preserved in dated folder
- Can revisit later when you have time to explore
- Back to productive browsing

---

### Example 3: Weekly Tab Hygiene Routine

**Scenario:** You treat tab bankruptcy like email inbox zero - weekly cleanup ritual.

**Setup:**
- Threshold: **7 days**
- Auto-bookmark: **ON**
- Schedule: Every Monday morning

**Routine:**
```
Monday 9:00 AM:
  1. Coffee ☕
  2. Check Tab Bankruptcy badge
  3. If badge shows 20+:
     - Review tabs by age
     - Dismiss any still-relevant tabs
     - "Save & Close All"
  4. Start week with clean browser

Over time:
  Week 1: Closed 47 tabs
  Week 2: Closed 31 tabs
  Week 3: Closed 19 tabs  ← Getting better!
  Week 4: Closed 12 tabs
```

**Why it works:**
- Prevents tab accumulation
- Bookmarks act as an archive
- Forces you to acknowledge old tabs
- Reduces decision fatigue (7-day rule is automatic)

---

### Example 4: The "Just Keep Bookmarking" Approach

**Scenario:** You're afraid of losing important tabs, so you never close anything. Now you have 300 tabs.

**Strategy:** Lower the threshold, trust the bookmarks.

**Process:**
```
First cleanup:
  1. Set threshold: 14 days
  2. Badge shows: 234 old tabs (!)
  3. Take a deep breath
  4. Click "Save & Close All"
  5. 234 tabs → "Bankruptcy 2026-02-06" bookmarks
  6. Down to 66 tabs

Second cleanup (next week):
  1. Set threshold: 7 days
  2. Badge shows: 48 old tabs
  3. "Save & Close All"
  4. 48 tabs → "Bankruptcy 2026-02-13" bookmarks
  5. Down to 18 tabs

Third cleanup (week after):
  1. Threshold: 3 days (aggressive)
  2. Badge shows: 11 old tabs
  3. Review individual tabs
  4. Dismiss 2 important ones
  5. "Save & Close All" on the rest
  6. Down to 9 active tabs

Final state:
  - 9 tabs (all actually in use!)
  - 292 tabs safely bookmarked in dated folders
  - Can search bookmarks later if needed
  - Browser feels fast again
```

**Realization:** You'll rarely revisit old bookmarks, but knowing they're saved removes the anxiety.

---

### Example 5: Team Lead / PM with Context Switching

**Scenario:** You work on 5 different projects, each requiring different sets of tabs. Old project tabs clutter your browser.

**Setup:**
- Threshold: **3 days**
- Use Tab Bankruptcy to enforce context switching

**Workflow:**
```
Monday-Tuesday: Project A (Web App Redesign)
  - Open 15 design tabs, mockups, Figma links
  
Wednesday-Thursday: Project B (API Migration)
  - Open 20 documentation tabs, GitHub issues
  - Project A tabs now 2+ days old

Friday: Context switch to Project C
  - Click Tab Bankruptcy
  - Badge shows: 35 old tabs (Project A + B)
  
  Options:
  a) Dismiss Project B tabs (still working on it next week)
  b) "Save & Close" Project A tabs (done for now)
  
  Result: Only active project tabs remain
```

**Benefits:**
- Clear separation between projects
- Easy to "archive" a project's tabs when switching context
- Bookmarks serve as a "tab snapshot" for each project

---

### Example 6: The "Dismiss Button" Power User

**Scenario:** You use Tab Bankruptcy for triaging, not just closing.

**Strategy:** Use the popup as a "tab review dashboard."

**Daily habit:**
```
Every evening:
  1. Open Tab Bankruptcy popup
  2. Review tabs marked as old
  3. For each tab:
     - Still relevant? → Click × to dismiss (marks as fresh)
     - Done reading? → Let it stay in the list
     - Important? → Bookmark manually + dismiss
  4. End of week: "Close All" on whatever's left

Example session:
  Old tabs:
    ✅ "How to deploy Docker" → Dismiss (still learning)
    ❌ "Best restaurants in Tokyo" → Keep (trip was last month)
    ✅ "React 19 docs" → Dismiss (current project)
    ❌ "Black Friday deals" → Keep (Black Friday passed)
    ✅ "GitHub repo for work" → Dismiss (active work)

  After dismissing:
    - 3 tabs marked fresh (won't show in popup for X days)
    - 2 tabs left to close on Friday
```

**Why it works:**
- Forces conscious decision about each tab
- Dismiss = "I'm still using this"
- Ignoring = "I forgot about this, probably not important"

---

### Example 7: Recovering Accidentally Closed Tabs

**Scenario:** You clicked "Close All" too fast and immediately regret it.

**Good news:** All tabs were bookmarked!

**Recovery:**
```
1. Open Chrome bookmarks (Cmd/Ctrl + Shift + O)
2. Navigate to:
   Other Bookmarks > Tab Bankruptcy > Bankruptcy 2026-02-06
3. Right-click folder → "Open all bookmarks"
4. All tabs restored!

Or individually:
  - Browse the bookmark folder
  - Open specific tabs you need
  - Delete folder when done
```

**Pro tip:** Keep bankruptcy bookmark folders for 1-2 weeks, then delete. If you haven't revisited them by then, you didn't need those tabs.

---

## Tips & Best Practices

### Finding the Right Threshold

- **3 days**: Aggressive cleanup, for disciplined tab minimalists
- **7 days**: Sweet spot for most people (default)
- **14 days**: Lenient, for those who like to keep research around
- **30 days**: Very lenient, basically only catches ancient tabs

**Experiment:**
1. Start with 7 days
2. If you're constantly dismissing tabs → increase to 14 days
3. If your badge rarely shows old tabs → decrease to 3 days

### When to Use "Save & Close" vs "Close All"

**Always use "Save & Close" unless:**
- You're closing a bunch of duplicate tabs
- The tabs are genuinely useless (e.g., shopping sites from weeks ago)
- You're 100% sure you won't need them

**Why?** Bookmarks cost nothing, but reopening a lost tab from history is painful.

### Organizing Bankruptcy Bookmarks

**Default:**
```
Other Bookmarks > Tab Bankruptcy > Bankruptcy 2026-02-06
```

**Pro user structure (manual):**
Move folders by project:
```
Tab Bankruptcy
├── Research
│   ├── AI Papers (Feb 6)
│   └── Design Inspiration (Jan 30)
├── Work
│   └── Sprint 12 Tabs (Feb 1)
└── Random
    └── Bankruptcy 2026-01-25
```

### Keyboard Shortcut (Optional Setup)

Chrome allows custom extension shortcuts:
1. Go to `chrome://extensions/shortcuts`
2. Find "Tab Bankruptcy"
3. Set shortcut (e.g., `Cmd+Shift+B`)
4. Now you can open the popup with a keystroke!

## Screenshots

*Screenshots coming soon*

## License

MIT License - see [LICENSE](LICENSE) for details

## Credits

Built by [Muin](https://github.com/muin-company)

---

**Tip**: Start with a 7-day threshold and adjust based on your browsing habits. Most people find 7-14 days is the sweet spot.
