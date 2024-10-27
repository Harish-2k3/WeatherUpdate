import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function TempChart(props) {
  const { data } = props;

  return (
    <div className="py-20 mx-5 md:mx-10">
      <h2 className="text-center text-lg font-semibold italic text-white pb-5">Temperature Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis 
            dataKey="datetime" 
            stroke="#fff" // Change XAxis text color to white
            tick={{ fill: '#fff',angle:-35  }} // Change XAxis tick color to white
          />
          <YAxis 
            stroke="#fff" // Change YAxis text color to white
            tick={{ fill: '#fff' }} // Change YAxis tick color to white
          />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Line type="monotone" dataKey="tempmin" stroke="#8884d8" name="Min Temp" />
          <Line type="monotone" dataKey="tempmax" stroke="#82ca9d" name="Max Temp" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HumidityChart({ data }) {
  return (
    <div className="py-20 mx-5 md:mx-10">
      <h2 className="text-center text-lg font-semibold italic text-white pb-5">Humidity Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis 
            dataKey="datetime" 
            stroke="#fff" // Change XAxis text color to white
            tick={{ fill: '#fff',angle:-35  }} // Change XAxis tick color to white
          />
          <YAxis 
            stroke="#fff" // Change YAxis text color to white
            tick={{ fill: '#fff' }} // Change YAxis tick color to white
          />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" name="Humidity (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function WindSpeedChart({ data }) {
  return (
    <div className="md:mx-10 mx-5 pt-20 pb-20 ">
      <h2 className="text-center text-lg font-semibold italic text-white pb-5">Wind Speed Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis 
            dataKey="datetime" 
            stroke="#fff" // Change XAxis text color to white
            tick={{ fill: '#fff',angle:-35 }} // Change XAxis tick color to white
          />
          <YAxis 
            stroke="#fff" // Change YAxis text color to white
            tick={{ fill: '#fff' }} // Change YAxis tick color to white
          />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Line type="monotone" dataKey="windspeed" stroke="#8884d8" name="Wind Speed (km/h)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
