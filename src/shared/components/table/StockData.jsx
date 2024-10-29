import React from 'react';

export default function StockData(props) {
    const { data } = props;

    return (
        <div className='text-center max-w-[85rem] mx-auto py-20 bg-black text-white'>
            <table className='w-[80rem] mx-auto'>
                <thead className='bg-gray-500'>
                    <tr className='border'>
                        <th>Timestamp</th>
                        <th>Market Capitalization</th>
                        <th>ETH (Ethereum)</th>
                        <th>Ratio</th>
                        <th>Volume</th>
                        <th>Dominance</th>
                        <th>Coin Name</th>
                        <th>Dom Prct</th>
                    </tr>
                </thead>
                <tbody className='text-black'>
                    {data.map((entry, index) => (
                        <tr
                            key={index}
                            className={`border ${index === 0 ? 'bg-yellow-100' : 'bg-gray-100'}`}
                        >
                            <td className='border'>{entry.timestamp}</td>
                            <td className='border'>{parseFloat(entry.defi_market_cap).toFixed(2)}</td>
                            <td className='border'>{parseFloat(entry.eth_market_cap).toFixed(2)}</td>
                            <td className='border'>{parseFloat(entry.defi_to_eth_ratio).toFixed(2)}</td>
                            <td className='border'>{parseFloat(entry.trading_volume_24h).toFixed(2)}</td>
                            <td className='border'>{parseFloat(entry.defi_dominance).toFixed(2)}</td>
                            <td className='border'>{entry.top_coin_name}</td>
                            <td className='border'>{parseFloat(entry.top_coin_defi_dominance).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
