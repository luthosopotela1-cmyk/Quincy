import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: string;
  company: {
    id: string;
    name: string;
    jseCode: string;
  };
  quantity: number;
  purchasePrice: number;
  currentValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    totalValue: 0,
    totalInvested: 0,
    totalGainLoss: 0,
    totalGainLossPercent: 0,
  });

  useEffect(() => {
    // TODO: Fetch portfolio from API
    setLoading(false);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        <p className="text-gray-400 mt-2">Track your investments</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard title="Total Value" value={`R${summary.totalValue.toFixed(2)}`} />
        <SummaryCard title="Total Invested" value={`R${summary.totalInvested.toFixed(2)}`} />
        <SummaryCard
          title="Total Gain/Loss"
          value={`R${summary.totalGainLoss.toFixed(2)}`}
          highlight={summary.totalGainLoss >= 0 ? 'green' : 'red'}
        />
        <SummaryCard
          title="Return %"
          value={`${summary.totalGainLossPercent.toFixed(2)}%`}
          highlight={summary.totalGainLossPercent >= 0 ? 'green' : 'red'}
        />
      </div>

      {/* Portfolio Items */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Purchase Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Current Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Gain/Loss</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  Loading portfolio...
                </td>
              </tr>
            ) : portfolio.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  Your portfolio is empty
                </td>
              </tr>
            ) : (
              portfolio.map((item) => (
                <tr key={item.id} className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-white font-medium">{item.company.name}</p>
                      <p className="text-gray-400 text-sm">{item.company.jseCode}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">{item.quantity}</td>
                  <td className="px-6 py-4 text-white">R{item.purchasePrice.toFixed(2)}</td>
                  <td className="px-6 py-4 text-white">R{item.currentValue.toFixed(2)}</td>
                  <td className={`px-6 py-4 ${item.gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    R{item.gainLoss.toFixed(2)} ({item.gainLossPercent.toFixed(2)}%)
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-400 hover:text-red-300 text-sm">Remove</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface SummaryCardProps {
  title: string;
  value: string;
  highlight?: 'green' | 'red';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, highlight }) => (
  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
    <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
    <p className={`text-2xl font-bold mt-2 ${
      highlight === 'green' ? 'text-green-400' : highlight === 'red' ? 'text-red-400' : 'text-white'
    }`}>
      {value}
    </p>
  </div>
);

export default Portfolio;
