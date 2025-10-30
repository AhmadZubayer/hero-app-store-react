import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { useNavigate } from 'react-router';

const AppCard = ({ app }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/app/${app.id}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow w-[380px] h-[430px] flex flex-col cursor-pointer"
        >
            <div className="rounded-lg w-full h-[320px] mb-2 flex items-center justify-center overflow-hidden p-4">
                <img 
                    src={app.image} 
                    alt={app.title}
                    className="max-w-[200px] max-h-[200px] w-auto h-auto object-contain"
                />
            </div>
            
     
            <h3 className="font-semibold text-gray-800 text-xl mb-2">
                {app.title}
            </h3>
            
    
            <div className="flex items-center justify-between mt-auto">
            
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs">
                    <img src={downloadIcon} alt="downloads" className="w-3 h-3" />
                    <span className="font-medium">{app.size}M</span>
                </div>
                
        
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs">
                    <img src={ratingIcon} alt="rating" className="w-3 h-3" />
                    <span className="font-medium">{app.ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default AppCard;