## LIVE LINK:

# 📱 About The Project

A modern web-based app store where users can browse, search, and install their favorite applications.

Hero App Store is like a mini version of Google Play Store or Apple App Store, but it runs in your web browser. Users can explore different apps, see their ratings and reviews, install apps they like, and manage their installed apps - all without any real downloads (it's a simulation using browser storage).

## ✨ Key Features

- **📋 Browse All Apps**: View a complete catalog of available applications with beautiful cards
- **🔥 Trending Apps**: Discover the most popular apps on the platform
- **🔍 Search Functionality**: Quickly find apps by name or category
- **📊 Detailed App Pages**: See app ratings, reviews, downloads, and descriptions with interactive charts
- **⬇️ Install Apps**: Click to "install" apps (saved in your browser)
- **📦 Manage Installed Apps**: View all your installed apps in one place
- **🗑️ Uninstall Apps**: Remove apps you no longer need
- **🔄 Sort & Filter**: Sort installed apps by download count
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Beautiful UI**: Clean, modern interface with smooth animations

## 🛠️ Technology Stack

### Frontend Framework
- **React 19** - The core JavaScript library for building the user interface
- **React Router 7** - For navigating between different pages (Home, All Apps, Installed Apps, App Details)

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework for fast, custom styling
- **DaisyUI 5** - Pre-built UI components for Tailwind
- **Lucide React** - Beautiful icon library

### Data Visualization
- **Recharts** - For displaying app rating charts in a visual, interactive way

### State Management & Storage
- **React Hooks** (useState) - Managing component state
- **localStorage** - Persisting installed apps data in the browser

### User Experience
- **React Toastify** - Showing success notifications when installing/uninstalling apps
- **Axios** - Fetching app data from JSON file

### Build Tools
- **Vite** - Lightning-fast build tool and development server
- **ESLint** - Code quality and consistency checker

## 🚀 How It Works

1. **Browse**: Users land on the home page and see trending apps
2. **Explore**: Navigate to "All Apps" to see the complete catalog
3. **Search**: Use the search bar to find specific apps
4. **View Details**: Click any app to see detailed information, ratings chart, and reviews
5. **Install**: Click "Install Now" - the app ID gets saved to browser localStorage
6. **Manage**: Visit "Installed Apps" page to see all installed apps
7. **Uninstall**: Click "Uninstall" to remove apps - they disappear instantly
8. **Persist**: Installed apps remain even after closing the browser (thanks to localStorage)

## 📂 Project Structure

```
hero-app-store/
├── src/
│   ├── components/
│   │   ├── apps/          # App-related components
│   │   ├── pages/         # Page components (Home, All Apps, etc.)
│   │   ├── ui/            # UI components (Nav, Footer, Banner)
│   │   └── root/          # Root layout component
│   ├── assets/            # Images and icons
│   └── App.jsx            # Main app component
├── public/
│   ├── app-list.json      # App data
│   └── Apps/              # App icons and images
└── package.json           # Project dependencies

```




