import React, { useEffect, useState } from 'react'
import { getCriptoData } from '../../shared/services/ApiStockData';
import CryptoChart from '../../shared/components/Chart/CryptoChart';

export default function Visual1() {
    const[data, setData] = useState([]);
    const criptoData = async () => {
        const res = await getCriptoData();
        setData(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        criptoData();
    }, [])

  return (
    <div>
        <CryptoChart data={data} />
    </div>
  )
}
