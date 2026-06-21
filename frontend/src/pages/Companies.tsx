import React, { useState, useEffect } from 'react';

interface Company {
  id: string;
  name: string;
  jseCode: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;
  marketCap: number;
  performanceScore: number;
  sector: string;
}

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sector, setSector] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // TODO: Fetch companies from API
    setLoading(false);
  }, [search, sector, sortBy]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Companies</h1>
        <p className="text-gray-400 mt-2">Browse and analyze JSE-listed companies</p>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 outline-none"
          />

          {/* Sector Filter */}
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 outline-none"
          >
            <option value="">All Sectors</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Energy">Energy</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 outline-none"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="performance">Performance Score</option>
            <option value="marketCap">Market Cap</option>
          </select>
        </div>
      </div>

      {/* Companies Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Market Cap</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Performance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  Loading companies...
                </td>
              </tr>
            ) : companies.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  No companies found
                </td>
              </tr>
            ) : (
              companies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-white font-medium">{company.name}</p>
                      <p className="text-gray-400 text-sm">{company.jseCode}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">R{company.currentPrice.toFixed(2)}</td>
                  <td className={`px-6 py-4 ${company.priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {company.priceChange >= 0 ? '+' : ''}{company.priceChangePercent.toFixed(2)}%
                  </td>
                  <td className="px-6 py-4 text-white">R{(company.marketCap / 1e9).toFixed(1)}B</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-2" style={{
                        backgroundColor: company.performanceScore >= 4 ? '#10B981' : company.performanceScore >= 3 ? '#F59E0B' : '#EF4444'
                      }}></div>
                      <span className="text-white">{company.performanceScore.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-400 hover:text-blue-300 text-sm">View Details</button>
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

export default Companies;
