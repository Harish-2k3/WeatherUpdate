import React, { useEffect, useState } from 'react';
import { getCriptoData } from '../../shared/services/ApiStockData';
import CryptoData from '../../shared/components/table/CriptoTable';

export default function Cripto() {
    const [data, setData] = useState({ market_cap_percentage: {}, total_market_cap: {}, total_volume: {} });
    const [historicalData, setHistoricalData] = useState([]); // State to hold historical data
    const [previousData, setPreviousData] = useState({}); // State to hold the previous data for comparison

    const getData = async () => {
        try {
            const res = await getCriptoData();
            const newData = res.data;
            console.log(newData);

            // Highlight changes
            const changes = {};
            for (const coin of ['bnb', 'btc', 'eth', 'xrp']) {
                if (previousData[coin] && previousData[coin].market_cap_percentage !== newData.market_cap_percentage[coin]) {
                    changes[coin] = newData.market_cap_percentage[coin];
                }
            }

            setData(newData);
            const timestamp = new Date().toLocaleString();

            // Save historical data with timestamp
            setHistoricalData(prev => [
                ...prev,
                { ...newData, timestamp, changes }
            ]);
            setPreviousData(newData); // Update previous data
        } catch (error) {
            console.error("Error fetching crypto data:", error);
        }
    };

    useEffect(() => {
        getData(); // Fetch data on component mount

        const interval = setInterval(() => {
            getData(); // Fetch data every 10 minutes
        }, 600000000); //600000 - 10min

        return () => clearInterval(interval); // Clear the interval on unmount
    }, []);

    // Function to delete historical data entry
    const deleteHistoricalEntry = (index) => {
        setHistoricalData(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <CryptoData data={data} historicalData={historicalData} 
            onDelete={deleteHistoricalEntry}/>
        </div>
    );
}