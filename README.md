# 全球电影评分 (Global Movie Ratings)

<div align="center">

A browser extension that displays global movie ratings (IMDb, Rotten Tomatoes, Metacritic) on Douban movie pages.

[![Plasmo](https://img.shields.io/badge/Plasmo-Framework-blue)](https://docs.plasmo.com/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-blue)](https://tailwindcss.com/)

</div>

## 📖 Overview

When browsing movie pages on Douban (豆瓣电影), this extension automatically fetches and displays ratings from major international movie rating platforms, helping you get a comprehensive view of global film reviews.

### ✨ Features

- **🎬 Automatic Rating Display**: Automatically detects IMDb ID on Douban movie pages and displays global ratings
- **🌍 Multiple Sources**: Shows ratings from IMDb, Rotten Tomatoes, and Metacritic
- **🎨 Beautiful UI**: Modern, responsive design that seamlessly integrates with Douban's interface
- **🔧 Customizable API Key**: Use the default API key or configure your own OMDb API key
- **⚡ Fast & Lightweight**: Minimal performance impact with efficient data fetching
- **🎯 Smart Injection**: Only activates on Douban movie pages

### 📊 Data Sources

Powered by [OMDb API](https://www.omdbapi.com/) - The Open Movie Database

## 🚀 Installation

### For Users

1. Download the latest release from the releases page
2. Extract the ZIP file
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked" and select the extracted folder
6. Navigate to any Douban movie page (e.g., `https://movie.douban.com/subject/1292052/`)

### For Developers

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd global-movie-ratings

# Install dependencies
pnpm install
# or
npm install

# Start the development server
pnpm dev
# or
npm run dev
```

The extension will be compiled to `build/chrome-mv3-dev/`. Load this folder as an unpacked extension in Chrome.

### Tech Stack

- **Framework**: [Plasmo](https://docs.plasmo.com/) - Modern browser extension framework
- **UI Library**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom Plasmo prefixes
- **API**: OMDb API for movie data
- **Storage**: Chrome Storage API for settings persistence

### Project Structure

```
global-movie-ratings/
├── src/
│   ├── popup.tsx       # Extension popup interface
│   ├── options.tsx     # Settings page for API key configuration
│   ├── content.tsx     # Content script that injects ratings on Douban pages
│   └── style.css       # Global styles with Tailwind
├── assets/
│   └── icon.png        # Extension icon
├── package.json        # Project dependencies and metadata
└── tsconfig.json       # TypeScript configuration
```

### Key Components

#### Content Script (`content.tsx`)
- Matches: `https://movie.douban.com/subject/*`
- Extracts IMDb ID from Douban page
- Fetches ratings from OMDb API
- Injects rating widget below movie rating section

#### Popup (`popup.tsx`)
- Displays extension information
- Quick access to settings page
- Shows supported features

#### Options Page (`options.tsx`)
- Configure custom OMDb API key
- Toggle between default and custom API key
- User-friendly settings interface

## ⚙️ Configuration

### API Key Setup

1. Click the extension icon and select "打开设置" (Open Settings)
2. Choose between:
   - **Default API Key**: Built-in key, no configuration needed
   - **Custom API Key**: Use your own key for independent quota
3. To get a free API key, visit [OMDb API](https://www.omdbapi.com/apikey.aspx)
4. Save settings and refresh any Douban movie pages

> 💡 **Note**: The free OMDb API has a limit of 1,000 requests per day. If you exceed this limit, consider using your own API key.

## 📦 Building for Production

```bash
# Create production build
pnpm build
# or
npm run build

# Package for distribution
pnpm package
# or
npm run package
```

The production build will be available in `build/chrome-mv3-prod/`, ready to be zipped and published to browser extension stores.

## 🌐 Supported Platforms

- **Browsers**: Chrome, Edge, Brave, and other Chromium-based browsers
- **Target Website**: Douban Movie (movie.douban.com)
- **Rating Sources**: IMDb, Rotten Tomatoes, Metacritic

## 📝 License

See [LICENSE](LICENSE) file for details.

## 👤 Author

**Alen Hu**
- Email: huhaoyue0220@126.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📚 Resources

- [Plasmo Documentation](https://docs.plasmo.com/)
- [OMDb API Documentation](https://www.omdbapi.com/)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)

---

<div align="center">
Made with ❤️ using Plasmo
</div>
