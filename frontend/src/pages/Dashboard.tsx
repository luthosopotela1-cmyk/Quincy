import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DashboardStats {
  topGainers: any[];
  topLosers: any[];
  marketTrend: any[];
  portfolioValue: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    topGainers: [],
    topLosers: [],
    marketTrend: [],
    portfolioValue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch dashboard data from API
    setLoading(false);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Quincy Market Dashboard</h1>
        <p className="text-gray-400 mt-2">SA Investment Tracker</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Portfolio Value" value="R0.00" change="+0%" />
        <MetricCard title="Total Investments" value="R0.00" change="+0%" />
        <MetricCard title="Today's Gain/Loss" value="R0.00" change="0%" />
        <MetricCard title="Market Sentiment" value="Neutral" change="" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Trend Chart */}
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Market Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.marketTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Legend />
              <Line type="monotone" dataKey="jseIndex" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Companies */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Top Gainers</h2>
          <div className="space-y-3">
            {/* TODO: Map through top gainers */}
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        </div>
      </div>

      {/* Top Losers */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">Top Losers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* TODO: Map through top losers */}
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => (
  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
    <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-white mt-2">{value}</p>
    <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
      {change}
    </p>
  </div>
);

export default Dashboard;
