# Tab Bankruptcy Privacy Policy

**Last Updated:** February 7, 2026

## Overview

Tab Bankruptcy is committed to protecting your privacy. This policy explains what data the extension collects and how it is used.

## Data Collection

Tab Bankruptcy collects and stores the following data **locally on your device**:

- **Tab URLs and titles** - Used to display tabs in the popup and create bookmarks
- **Tab creation timestamps** - Used to calculate tab age
- **User preferences** - Age threshold setting (3/7/14/30 days) and auto-bookmark preference

## Data Usage

All collected data is used solely to provide the extension's functionality:
- Tracking when tabs were opened to determine which are "old"
- Displaying old tabs organized by age in the popup
- Creating bookmarks when you use "Save & Close All"
- Remembering your preferred age threshold and settings

## Data Storage

**All data is stored locally** using Chrome's storage API (`chrome.storage.local`).

**No data is transmitted** to external servers, third parties, or any remote location.

## Data Sharing

We do **not** share, sell, or transmit any user data.

The extension operates entirely offline. There are no analytics, tracking, or external services.

## Permissions Explanation

Tab Bankruptcy requires the following permissions:

- **tabs** - Required to list open tabs, check URLs/titles, and close tabs when you request
- **storage** - Required to save your preferences and tab age data locally
- **bookmarks** - Required to create bookmark folders and save tabs when you use "Save & Close"

## User Control

You have full control over your data:

- **Uninstall** - Removes all stored data immediately
- **Clear extension data** - Go to `chrome://extensions/` → Tab Bankruptcy → "Clear storage"
- **Bookmarks** - Manually delete bookmark folders created by the extension at any time

## Data Retention

- Tab age data is retained until you close the tab or clear extension data
- User preferences persist until you change them or uninstall the extension
- Bookmarks persist until you manually delete them from Chrome bookmarks

## Third-Party Services

None. Tab Bankruptcy does not use any third-party services, analytics, or tracking.

## Changes to This Policy

We may update this privacy policy from time to time. Changes will be posted with a new "Last Updated" date.

## Contact

For privacy questions or concerns, contact us at:
- Email: privacy@muin.company
- GitHub: https://github.com/muin-company/tab-bankruptcy/issues

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- Chrome Extension Platform Privacy Requirements
- General Data Protection Regulation (GDPR) principles

---

**Summary:** Tab Bankruptcy stores data locally only. Nothing is sent to external servers. You control all your data.
