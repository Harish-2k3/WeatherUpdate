import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../../shared/services/Apiweatherdata'
import Weathertable from '../../shared/components/table/Weathertable';

export default function Home() {
    const [weather, setWeather] = useState([]);
    const getweatherdata = async()=>{
        const res = await getWeatherData()
        console.log(res.days)
        setWeather(res.days)
    }
    useEffect(() => {
        getweatherdata()
    }, [])
  return (
    <div>
        <Weathertable weather={weather}/>
    </div>
  )
}