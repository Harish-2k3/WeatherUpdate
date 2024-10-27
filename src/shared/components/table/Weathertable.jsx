import React, { useState } from 'react';
import { FiInfo, FiChevronRight } from 'react-icons/fi'; // Import scroll icon
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Weathertable(props) {
    const { weather } = props;

    // Function to calculate the average temperature
    const calculateAverageTemp = (minTemp, maxTemp) => {
        return ((minTemp + maxTemp) / 2).toFixed(1); // Returns average rounded to one decimal place
    };

    return (
        <div className='md:max-w-[85rem] mx-auto md:px-3 py-5 bg-[#0a0a0a]'>
            <div className='text-center'>
                <h1 className='text-2xl font-medium pt-4 pb-5 text-white '>Weather Data</h1>
            </div>
            <div className='overflow-x-auto max-w-full'>
                <table className='min-w-full  border-gray-300 mx-auto rounded-lg shadow-md text-sm bg-[#1e384d] '>
                    <thead className='bg-[#022d50]'>
                        <tr className='text-center'>
                            <th className='px-4 py-2 md:px-10 md:py-3 border text-left text-white font-bold uppercase tracking-wider'>Date</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Sunrise</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Dew</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Humidity</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Min Temperature</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Max Temperature</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Windspeed</th>
                            <th className='px-6 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Sunset</th>
                            <th className='px-10 py-3 border text-left text-white font-semibold uppercase tracking-wider'>Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weather.map((item, index) => (
                            <WeatherRow key={index} item={item} calculateAverageTemp={calculateAverageTemp} />
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Scroll indicator for small screens */}
            <div className="flex justify-center sm:hidden pb-10">
                <span className="text-white flex items-center">
                    Scroll for more <FiChevronRight className="ml-1 animate-bounce-right" />
                </span>
            </div>
        </div>
    );
}

function WeatherRow({ item, calculateAverageTemp }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const data = [
        { name: 'Min Temp', value: item.tempmin },
        { name: 'Max Temp', value: item.tempmax },
    ];

    const handleInfoClick = (event) => {
        event.stopPropagation();
        setModalVisible(true);
    };

    const closeModal = () => setModalVisible(false);

    return (
        <>
            <tr className='text-center'>
                <td className='px-6 py-4 border text-white'>{item.datetime}</td>
                <td className='px-6 py-4 border text-white'>{item.sunrise}</td>
                <td className='px-6 py-4 border text-white'>{item.dew}</td>
                <td className='px-6 py-4 border text-white'>{item.humidity}</td>
                <td className='px-6 py-4 border text-white'>{item.tempmin}</td>
                <td className='px-6 py-4 border-b text-white md:flex items-center justify-center'>
                    {item.tempmax}
                    <span 
                        className='inline-block ml-2 cursor-pointer' 
                        onClick={handleInfoClick}
                    >
                        <FiInfo className='white' />
                    </span>
                </td>
                <td className='px-6 py-4 border text-white'>{item.windspeed}</td>
                <td className='px-6 py-4 border text-white'>{item.sunset}</td>
                <td className='px-6 py-4 border text-white'>{item.conditions}</td>
            </tr>
            {isModalVisible && (
                <WeatherModal 
                    onClose={closeModal}
                    data={data}
                    averageTemp={calculateAverageTemp(item.tempmin, item.tempmax)}
                />
            )}
        </>
    );
}

function WeatherModal({ onClose, data, averageTemp }) {
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center' onClick={onClose}>
            <div className='bg-white p-5 rounded-lg shadow-lg relative w-80' onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className='absolute top-2 right-2 text-gray-500'>
                    X
                </button>
                <h2 className='text-lg font-semibold text-center mb-4'>Temperature Details</h2>
                <div className='mb-4 text-center text-gray-700'>
                    Average Temp: {averageTemp} °C
                </div>
                <BarChart width={250} height={150} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
}
