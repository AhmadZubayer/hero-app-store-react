import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchApp = ({ appData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (!searchTerm.trim()) {
            return;
        }

        // Search for the app by name (case-insensitive)
        const foundApp = appData.find(app => 
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (foundApp) {
            // Navigate to app details page
            navigate(`/app/${foundApp.id}`);
        } else {
            // Navigate to app not found page
            navigate('/app-not-found');
        }

        // Clear search input
        setSearchTerm('');
    };

    return (
        <form onSubmit={handleSearch} className="w-80">
            <label className="input flex items-center gap-2 w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input 
                    type="search" 
                    placeholder="Search Apps" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="outline-none w-full"
                />
            </label>
        </form>
    );
};

export default SearchApp;
