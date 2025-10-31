import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppsContainer from '../apps/AllAppsContainer';
import SearchApp from '../apps/SearchApp';

const AllApps = () => {
    const {appData} = useLoaderData();
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                
                <h1 className='font-bold text-5xl text-center'>Our Applications</h1>
                <p className='text-center mt-4 text-lg'>
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-600 text-lg font-medium">
                        ({appData.length}) Apps Found
                    </p>
                    <SearchApp appData={appData} />
                </div>
            </div>
            <AllAppsContainer appsData={appData}></AllAppsContainer>    
        </div>
    );
};

export default AllApps;