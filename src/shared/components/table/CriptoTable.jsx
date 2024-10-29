import React from 'react';

export default function CryptoData(props) {
    const { data, historicalData, onDelete } = props;

    return (
        <div className='text-center max-w-[85rem] mx-auto py-20 bg-black text-white'>
            <h2 className='text-2xl font-bold mb-5'>Market Cap Percentage</h2>

            {/* Scrollable wrapper for mobile */}
            <div className='overflow-x-auto max-w-full'>
                <table className='w-[60rem] mx-auto bg-gray-800 mb-10'>
                    <thead>
                        <tr className='bg-gray-600'>
                            <th className='py-2 px-4 border'>Market Cap</th>
                            <th className='py-2 px-4 border'>Market Cap Prct</th>
                            <th className='py-2 px-4 border'>Total Market Cap</th>
                            <th className='py-2 px-4 border'>Total Volume</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {['bnb', 'btc', 'eth', 'xrp'].map((coin) => (
                            <tr key={coin}>
                                <td className='py-2 border'>{coin.toUpperCase()}</td>
                                <td className='py-2 border'>
                                    {data.market_cap_percentage[coin]
                                        ? `${data.market_cap_percentage[coin].toFixed(2)}%`
                                        : 'N/A'}
                                </td>
                                <td className='py-2 border'>
                                    {data.total_market_cap[coin] !== undefined
                                        ? data.total_market_cap[coin].toLocaleString()
                                        : 'N/A'}
                                </td>
                                <td className='py-2 border'>
                                    {data.total_volume[coin] !== undefined
                                        ? data.total_volume[coin].toLocaleString()
                                        : 'N/A'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Historical Data Table */}
            <h2 className='text-2xl font-bold mb-5'>Historical Data</h2>
            <div className='overflow-x-auto max-w-full'>
                <table className='w-[60rem] mx-auto bg-gray-800'>
                    <thead>
                        <tr className='bg-gray-600'>
                            <th className='py-2 px-4 border'>Timestamp</th>
                            <th className='py-2 px-4 border'>Market Cap Prct</th>
                            <th className='py-2 px-4 border'>Total Market Cap</th>
                            <th className='py-2 px-4 border'>Total Volume</th>
                            <th className='py-2 px-4 border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {historicalData.map((entry, index) => (
                            <tr key={index}>
                                <td className='py-2 border'>{entry.timestamp}</td>
                                <td className='py-2 border'>
                                    {Object.entries(entry.market_cap_percentage)
                                        .filter(([coin]) => ['bnb', 'btc', 'eth', 'xrp'].includes(coin))
                                        .map(([coin, value]) => (
                                            <div key={coin} className={entry.changes[coin] ? 'text-green-500' : ''}>
                                                {coin.toUpperCase()}: {value.toFixed(2)}%
                                            </div>
                                        ))}
                                </td>
                                <td className='py-2 border'>
                                    {Object.entries(entry.total_market_cap)
                                        .filter(([coin]) => ['bnb', 'btc', 'eth', 'xrp'].includes(coin))
                                        .map(([coin, value]) => (
                                            <div key={coin}>{coin.toUpperCase()}: {value.toLocaleString()}</div>
                                        ))}
                                </td>
                                <td className='py-2 border'>
                                    {Object.entries(entry.total_volume)
                                        .filter(([coin]) => ['bnb', 'btc', 'eth', 'xrp'].includes(coin))
                                        .map(([coin, value]) => (
                                            <div key={coin}>{coin.toUpperCase()}: {value.toLocaleString()}</div>
                                        ))}
                                </td>
                                <td className='py-2 border'>
                                    <button onClick={() => onDelete(index)} className='bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
