# Quincy Architecture

## System Overview

Quincy is a full-stack web application designed to track and analyze South African (JSE) underperforming companies for investment opportunities.

## Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Data visualization
- **Zustand** - State management
- **Axios** - HTTP client

### Backend
- **Node.js + Express** - Server framework
- **TypeScript** - Type-safe backend
- **PostgreSQL** - Primary database
- **Redis** - Caching & real-time data
- **JWT** - Authentication
- **Node-Cron** - Scheduled tasks

## Directory Structure

```
Quincy/
├── backend/
│   ├── src/
│   │   ├── index.ts           # Server entry point
│   │   ├── routes/            # API endpoints
│   │   ├── controllers/       # Business logic
│   │   ├── models/            # Database models
│   │   ├── services/          # External services
│   │   ├── middleware/        # Express middleware
│   │   └── utils/             # Helper functions
│   ├── dist/                  # Compiled JavaScript
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── index.tsx          # Entry point
│   │   ├── App.tsx            # Root component
│   │   ├── pages/             # Page components
│   │   ├── components/        # Reusable components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API client
│   │   ├── store/             # Zustand stores
│   │   └── types/             # TypeScript types
│   ├── public/                # Static files
│   └── package.json
│
├── data/
│   ├── scripts/               # Data collection scripts
│   └── migrations/            # Database migrations
│
└── docs/
    ├── ARCHITECTURE.md        # This file
    ├── API.md                 # API documentation
    └── SETUP.md               # Development setup guide
```

## Key Features

### 1. Market Data Collection
- Automated JSE data fetching
- Historical data storage
- Real-time price updates via Redis

### 2. Company Analysis
- Performance metrics calculation
- Risk scoring algorithm
- Financial ratio analysis

### 3. Portfolio Management
- Track watchlist companies
- Monitor investments
- Calculate portfolio metrics

### 4. Alerts & Notifications
- Price movement alerts
- Performance threshold alerts
- Email notifications

## Database Schema (Initial)

### Companies
- company_id
- jse_code
- name
- sector
- current_price
- market_cap
- performance_score

### Historical Data
- data_id
- company_id
- date
- open_price
- close_price
- high_price
- low_price
- volume

### Portfolio
- portfolio_id
- user_id
- company_id
- quantity
- purchase_price
- purchase_date

### Alerts
- alert_id
- user_id
- company_id
- alert_type
- threshold
- active

## API Endpoints (Initial)

```
GET  /api/companies              # List all companies
GET  /api/companies/:id          # Get company details
GET  /api/companies/search       # Search companies

GET  /api/stocks/:id/history     # Get historical data
GET  /api/stocks/:id/analysis    # Get analysis data

POST /api/portfolio/add          # Add to portfolio
GET  /api/portfolio              # Get user portfolio
DELETE /api/portfolio/:id        # Remove from portfolio

POST /api/alerts                 # Create alert
GET  /api/alerts                 # Get user alerts
DELETE /api/alerts/:id           # Delete alert
```

## Development Workflow

1. **Local Development**
   - Run backend: `npm run server`
   - Run frontend: `npm run client`
   - Both run concurrently with `npm run dev`

2. **Database Setup**
   - Create PostgreSQL database
   - Run migrations
   - Seed initial data

3. **Data Ingestion**
   - Configure JSE API credentials
   - Run data collection scripts
   - Schedule automatic updates via cron

## Deployment

### Production Build
```bash
npm run build
```

### Environment
- Backend runs on specified PORT
- Frontend served as static build
- Redis for session/cache management
- PostgreSQL on production server

## Security Considerations

- JWT authentication for API
- CORS configuration
- Input validation with Joi
- SQL injection prevention via parameterized queries
- Environment variables for sensitive data
- HTTPS enforcement in production
