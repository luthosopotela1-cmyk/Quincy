# Quincy - SA Market Investment Tracker

A web application for tracking and analyzing underperforming South African companies with high-risk, high-reward investment potential.

## Features

- **Market Tracking**: Real-time monitoring of JSE-listed companies
- **Performance Analysis**: Identify underperforming stocks
- **Risk Assessment**: Calculate risk-reward ratios
- **Portfolio Monitoring**: Track investment opportunities
- **Historical Data**: Analyze trends and patterns
- **Alerts**: Notifications for significant market movements

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Tailwind CSS for styling
- Chart.js/Recharts for visualizations
- Axios for API calls

### Backend
- Node.js with Express
- PostgreSQL for data persistence
- Redis for caching
- Scheduled jobs for data updates

### Data Sources
- JSE market data APIs
- Financial data aggregators
- News feeds for company updates

## Project Structure

```
Quincy/
├── frontend/          # React application
├── backend/           # Express API server
├── data/             # Data collection & processing
└── docs/             # Documentation
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- PostgreSQL 12+

### Installation

```bash
# Clone the repository
git clone https://github.com/luthosopotela1-cmyk/Quincy.git
cd Quincy

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start development server
npm run dev
```

## License

MIT License - See LICENSE file for details
