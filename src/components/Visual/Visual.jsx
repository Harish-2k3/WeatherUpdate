import React, { useEffect, useState } from 'react'
import TempChart, { HumidityChart, WindSpeedChart } from '../../shared/components/Chart/TempChart'
import { getWeatherData } from '../../shared/services/Apiweatherdata'

export default function Visual() {
    const[data,setData]=useState([])
    const getData=async()=>{
        const res = await getWeatherData()
        console.log(res.days)
        setData(res.days)
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='max-w-[85rem] mx-auto bg-black'>
        <TempChart data={data}/>
        <HumidityChart data={data}/>
        <WindSpeedChart data={data} />
    </div>
  )
}
