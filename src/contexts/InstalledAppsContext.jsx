import React, { createContext, useContext, useState, useEffect } from 'react';

const InstalledAppsContext = createContext();

export const useInstalledApps = () => {
    const context = useContext(InstalledAppsContext);
    if (!context) {
        throw new Error('useInstalledApps must be used within InstalledAppsProvider');
    }
    return context;
};

export const InstalledAppsProvider = ({ children }) => {
    // Initialize from localStorage or empty array
    const [installedAppIds, setInstalledAppIds] = useState(() => {
        const saved = localStorage.getItem('installedApps');
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever installedAppIds changes
    useEffect(() => {
        localStorage.setItem('installedApps', JSON.stringify(installedAppIds));
    }, [installedAppIds]);

    const installApp = (appId) => {
        if (!installedAppIds.includes(appId)) {
            setInstalledAppIds([...installedAppIds, appId]);
        }
    };

    const uninstallApp = (appId) => {
        setInstalledAppIds(installedAppIds.filter(id => id !== appId));
    };

    const isInstalled = (appId) => {
        return installedAppIds.includes(appId);
    };

    const value = {
        installedAppIds,
        installApp,
        uninstallApp,
        isInstalled
    };

    return (
        <InstalledAppsContext.Provider value={value}>
            {children}
        </InstalledAppsContext.Provider>
    );
};
