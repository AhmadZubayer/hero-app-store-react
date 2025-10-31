import React from 'react';
import '../ui/Loading.css';

const SearchApp = ({ searchTerm, setSearchTerm, isSearching }) => {
    return (
        <div className="w-80 relative">
            <label className="input flex items-center gap-2 w-full">
                {isSearching ? (
                    <span className="loader" style={{ 
                        width: '1.2rem', 
                        height: '1.2rem', 
                        margin: 0,
                        minHeight: 'auto'
                    }}></span>
                ) : (
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                )}
                <input 
                    type="search" 
                    placeholder="Search Apps" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="outline-none w-full"
                />
            </label>
        </div>
    );
};

export default SearchApp;
