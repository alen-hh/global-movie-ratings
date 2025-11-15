# Privacy Policy for Global Movie Ratings (全球电影评分)

**Last Updated:** November 15, 2025

**Extension Name:** Global Movie Ratings (全球电影评分)  
**Developer:** Alen Hu (huhaoyue0220@126.com)

---

## Introduction

This Privacy Policy describes how the Global Movie Ratings browser extension ("the Extension", "we", "our") collects, uses, and protects your information. We are committed to protecting your privacy and being transparent about our data practices.

## Information We Collect

### 1. User Settings
- **OMDb API Key**: If you choose to use a custom OMDb API key, the Extension stores this key locally using Chrome's storage API (`chrome.storage.sync`).
- **API Key Preference**: Your choice between using the default API key or a custom API key.

### 2. Data Automatically Accessed
- **IMDb IDs from Douban Pages**: The Extension reads IMDb identifiers displayed on Douban movie pages (movie.douban.com) to fetch corresponding ratings.
- **Page Content**: The Extension analyzes the structure of Douban movie pages to locate where to inject the rating widget.

### 3. Network Requests
The Extension makes API requests to:
- **OMDb API (www.omdbapi.com)**: To fetch movie ratings from IMDb, Rotten Tomatoes, and Metacritic.
- These requests include:
  - The IMDb ID extracted from the current Douban page
  - Your API key (default or custom)

## How We Use Your Information

The Extension uses the collected information solely for the following purposes:

1. **Fetch Movie Ratings**: To retrieve and display global movie ratings (IMDb, Rotten Tomatoes, Metacritic) on Douban movie pages.
2. **Store User Preferences**: To remember your API key settings across browsing sessions.
3. **Improve Functionality**: Console logs are generated for debugging purposes but remain local on your device.

## Data Storage and Security

### Storage Location
- All user settings (API keys) are stored locally on your device using Chrome's synchronized storage (`chrome.storage.sync`).
- This data may be synchronized across your Chrome browsers if you have Chrome Sync enabled.
- We do not have access to or store any of your data on our servers.

### Data Security
- Your custom API key (if provided) is stored securely in Chrome's storage system.
- No passwords, personal information, or browsing history are collected or stored.
- The Extension only activates on Douban movie pages (`https://movie.douban.com/subject/*`).

## Third-Party Services

### OMDb API
The Extension uses the OMDb API (www.omdbapi.com) to fetch movie ratings. When you use this Extension:
- API requests are sent to OMDb containing the IMDb ID and your API key.
- OMDb's privacy practices are governed by their own privacy policy, available at [www.omdbapi.com](https://www.omdbapi.com/).
- We recommend reviewing OMDb's privacy policy to understand how they handle API requests.

### No Analytics or Tracking
- We do NOT use any analytics services.
- We do NOT track your browsing history.
- We do NOT collect any personally identifiable information (PII).
- We do NOT use cookies or tracking pixels.

## Permissions Explanation

The Extension requires the following permissions:

### 1. Storage Permission
- **Purpose**: To save and retrieve your API key preferences.
- **Usage**: Stores your custom OMDb API key (if provided) and API key preference settings.

### 2. Host Permissions (`https://*/*`)
- **Purpose**: To make API requests to OMDb API.
- **Usage**: The Extension needs to send HTTPS requests to `www.omdbapi.com` to fetch movie ratings.
- **Note**: Despite the broad permission declaration, the Extension ONLY makes requests to OMDb API and ONLY operates on Douban movie pages.

### 3. Content Scripts on Douban
- **Purpose**: To inject the rating widget on Douban movie pages.
- **Usage**: The Extension only activates on pages matching `https://movie.douban.com/subject/*`.

## Data Sharing and Disclosure

- **We do NOT sell, trade, or transfer your information to third parties.**
- **We do NOT share your data with advertisers or marketers.**
- The only external communication is with OMDb API to fetch movie ratings.

## Data Retention

- User settings (API keys) are retained until you:
  - Uninstall the Extension, or
  - Manually clear the Extension's storage through browser settings, or
  - Reset to default settings within the Extension's options page.

## Your Rights and Choices

You have the following rights regarding your data:

1. **Access**: You can view your stored API key at any time through the Extension's settings page.
2. **Modify**: You can change or update your API key preferences at any time.
3. **Delete**: You can reset to default settings or uninstall the Extension to remove all stored data.
4. **Opt-out**: You can choose not to use the Extension at any time by disabling or uninstalling it.

## Children's Privacy

This Extension is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided information through this Extension, please contact us.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we make changes:
- The "Last Updated" date at the top will be revised.
- Significant changes will be communicated through the Extension's update notes or description page.
- Continued use of the Extension after changes constitutes acceptance of the updated policy.

## Open Source

This Extension is open source. You can review the complete source code to verify our privacy practices at [repository URL].

## Data Processing Location

- All data processing occurs locally on your device.
- API requests to OMDb are sent from your browser directly to OMDb's servers.
- We do not operate any backend servers that process or store your data.

## Contact Information

If you have any questions, concerns, or requests regarding this Privacy Policy or the Extension's data practices, please contact:

**Developer:** Alen Hu  
**Email:** huhaoyue0220@126.com

## Compliance

This Extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR) principles
- California Consumer Privacy Act (CCPA) requirements (where applicable)

## Summary

**In simple terms:**
- ✅ We only collect your API key if you provide one (optional).
- ✅ All data stays on your device.
- ✅ We only fetch movie ratings from OMDb API.
- ❌ We don't track you.
- ❌ We don't sell your data.
- ❌ We don't use analytics.
- ❌ We don't collect personal information.

---

**Your privacy is important to us. This Extension is designed to be privacy-friendly and transparent in all its operations.**

