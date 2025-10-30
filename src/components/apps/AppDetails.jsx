import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const AppDetails = ({app}) => {
    const chartData = app.ratings;
    return (
        <div className="bg-gray-50 p-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 max-w-7xl mx-auto ">
                <div className="flex gap-6">
                    <div className="w-40 h-40 bg-white rounded-2xl shadow-md flex items-center justify-center p-4">
                        <img 
                            src={app.image}
                            alt={app.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.title}</h1>
                        <p className="text-sm text-gray-600 mb-6">
                            Developed by <span className="text-blue-600">{app.companyName}</span>
                        </p>
                        
                    

                        <div className="flex gap-8 mb-6 border-t border-b border-gray-200 py-4 my-6 max-w-xl">
                            <div className="text-center">
                                <img src={downloadIcon} alt="downloads" className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-xs text-gray-500 mb-1">Downloads</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {app.downloads >= 1000000 ? `${(app.downloads / 1000000).toFixed(0)}M` : app.downloads}
                                </p>
                            </div>

                            <div className="text-center">
                                <img src={ratingIcon} alt="rating" className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-xs text-gray-500 mb-1">Average Ratings</p>
                                <p className="text-2xl font-bold text-gray-900">{app.ratingAvg}</p>
                            </div>

                            <div className="text-center">
                                <img src={reviewIcon} alt="reviews" className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-xs text-gray-500 mb-1">Total Reviews</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {app.reviews >= 1000 ? `${(app.reviews / 1000).toFixed(0)}K` : app.reviews}
                                </p>
                            </div>
                        </div>

                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                            Install Now ({app.size} MB)
                        </button>
                    </div>
                </div>
                <div className='border-t border-b border-gray-200 py-4 my-6'>
                    <h2 className="text-xl text-black font-bold mb-4">Ratings</h2>
                
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartData} layout="vertical">
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Bar dataKey="count" fill="#ff8800" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
                <div>
                    <h2 className="text-xl text-black font-bold mb-4">Description</h2>
                    <p className='text-black text-xl'>{app.description}</p>


                </div>
            </div>
        </div>
    );
};

export default AppDetails;