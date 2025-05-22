"use client";

import React, { useState, useEffect } from 'react';

interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    percent_change_24h: string;
}

const CryptoTicker: React.FC = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                // Using a common free API for demo purposes. Replace with a robust, high-volume API for production.
                const response = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCryptoData(data.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch crypto data:", err);
                setError(err instanceof Error ? err.message : String(err));
                setLoading(false);
            }
        };

        fetchCryptoData();
        const intervalId = setInterval(fetchCryptoData, 60000); // Refresh every 60 seconds

        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return <div className="text-center py-4">Loading crypto data...</div>;
    }

    if (error) {
        return <div className="text-center py-4 text-red-500">Error loading data: {error}</div>;
    }

    return (
        <div className="bg-gray-900 text-white py-3 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex">
                {cryptoData.map((crypto) => (
                    <div key={crypto.id} className="mx-4 inline-block">
                        <span className="font-semibold">{crypto.symbol}:</span>
                        <span className="text-green-400 ml-1">${parseFloat(crypto.price_usd).toFixed(2)}</span>
                        <span className={`ml-2 ${parseFloat(crypto.percent_change_24h) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            ({parseFloat(crypto.percent_change_24h).toFixed(2)}%)
                        </span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {cryptoData.map((crypto) => (
                    <div key={`${crypto.id}-duplicate`} className="mx-4 inline-block">
                        <span className="font-semibold">{crypto.symbol}:</span>
                        <span className="text-green-400 ml-1">${parseFloat(crypto.price_usd).toFixed(2)}</span>
                        <span className={`ml-2 ${parseFloat(crypto.percent_change_24h) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            ({parseFloat(crypto.percent_change_24h).toFixed(2)}%)
                        </span>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Adjust based on content width if not duplicating */
        }
      `}</style>
        </div>
    );
};

export default CryptoTicker; 