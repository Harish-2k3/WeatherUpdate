import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

export default function CryptoChart(props) {
  const { data } = props;

  // Check if data and market_cap_percentage exist
  if (!data || !data.market_cap_percentage || !data.total_volume) {
    return <div className="text-white">Loading data...</div>; // Optional loading state
  }

  // Extract the specific market cap percentages you want to visualize
  const marketCapPercentage = [
    { name: 'BTC', value: data.market_cap_percentage.btc || 0 },
    { name: 'ETH', value: data.market_cap_percentage.eth || 0 },
    { name: 'BNB', value: data.market_cap_percentage.bnb || 0 },
    { name: 'XRP', value: data.market_cap_percentage.xrp || 0 },
  ];

  // Extract total volumes for the same cryptocurrencies
  const totalVolumeData = [
    { name: 'BTC', volume: Number(data.total_volume.btc).toFixed(2) || 0 },
    { name: 'ETH', volume: Number(data.total_volume.eth).toFixed(2) || 0 },
    { name: 'BNB', volume: Number(data.total_volume.bnb).toFixed(2) || 0 },
    { name: 'XRP', volume: Number(data.total_volume.xrp).toFixed(2) || 0 },
  ];

  // Define colors for the pie chart slices
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='md:max-w-[85rem] mx-auto bg-black p-5 text-white'>
      <h2 className="text-2xl mb-10 text-center">Market Cap Percentage Distribution</h2>

      {/* Pie Chart for Selected Market Cap Percentages */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie 
            data={marketCapPercentage} 
            dataKey="value" 
            nameKey="name" 
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {marketCapPercentage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>

      <h2 className="text-2xl mb-9 mt-20 text-center">Total Volume Distribution</h2>

      {/* Bar Chart for Total Volumes */}
      <ResponsiveContainer width="70%" className={'mx-auto'} height={500}>
        <BarChart data={totalVolumeData} layout="vertical"> {/* Added layout="vertical" for horizontal bars */}
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey="name" type="category" /> {/* Changed YAxis to use 'name' as the key */}
          <XAxis type="number"/> {/* Changed XAxis to type 'number' */}
          <Tooltip 
            formatter={(value, name) => [`${name}: ${value}`, 'Volume']} 
            cursor={false} // Hide the cursor effect
            contentStyle={{ backgroundColor: '#333', border: 'none' }} // Customize tooltip style
            labelStyle={{ color: '#fff' }} // Customize label style
            itemStyle={{ color: '#fff' }} // Customize item style
          /> {/* Format tooltip values to show name and volume */}
          <Legend />
          <Bar 
            dataKey="volume" 
            fill="#ff6a4a" 
            radius={[10, 10, 0, 0]} // Rounded edges for the bars
            isAnimationActive={true} // Optional animation for bar transitions
            onMouseEnter={(data, index) => {
              data[index].fill = '#3a00ff'; // Change color on hover
            }}
            onMouseLeave={(data, index) => {
              data[index].fill = '#3a00ff'; // Reset color on mouse leave
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
