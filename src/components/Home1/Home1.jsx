import React, { useEffect, useState } from 'react';
import { GetStockData } from '../../shared/services/ApiStockData';
import StockData from '../../shared/components/table/StockData';

export default function Home1() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await GetStockData();
        const currentDate = new Date();
        const timestamp = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

        const newData = {
            ...res.data,
            timestamp
        };

        // Prepend new data with timestamp, preserving previous data
        setData((prevData) => [newData, ...prevData]);
    };

    useEffect(() => {
        getData(); // Fetch data on component mount
        const interval = setInterval(getData, 3600000); // Update every 1 hour

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <StockData data={data} />
        </div>
    );
}
