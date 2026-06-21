# Quincy API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Endpoints

### Companies

#### Get All Companies
```
GET /companies
```

**Query Parameters:**
- `page` (integer, default: 1) - Pagination page
- `limit` (integer, default: 20) - Items per page
- `sector` (string) - Filter by sector
- `sortBy` (string) - Sort field (price, performance, marketCap)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "company_id",
      "jseCode": "CODE",
      "name": "Company Name",
      "sector": "Technology",
      "currentPrice": 25.50,
      "previousClose": 26.00,
      "priceChange": -0.50,
      "priceChangePercent": -1.92,
      "marketCap": 5000000000,
      "performanceScore": 3.5,
      "lastUpdated": "2026-06-21T20:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

#### Get Company Details
```
GET /companies/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "company_id",
    "jseCode": "CODE",
    "name": "Company Name",
    "sector": "Technology",
    "currentPrice": 25.50,
    "marketCap": 5000000000,
    "peRatio": 15.2,
    "dividendYield": 2.5,
    "description": "Company description",
    "performanceMetrics": {
      "score": 3.5,
      "volatility": 2.1,
      "riskLevel": "medium",
      "trendScore": 4.2
    },
    "lastUpdated": "2026-06-21T20:00:00Z"
  }
}
```

#### Search Companies
```
GET /companies/search?query=name
```

**Response:** Array of matching companies

### Stock History

#### Get Historical Data
```
GET /stocks/:id/history?days=30
```

**Query Parameters:**
- `days` (integer, default: 30) - Number of days to retrieve

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "date": "2026-06-21",
      "open": 26.00,
      "close": 25.50,
      "high": 26.50,
      "low": 25.00,
      "volume": 1000000
    }
  ]
}
```

#### Get Analysis Data
```
GET /stocks/:id/analysis
```

**Response:**
```json
{
  "success": true,
  "data": {
    "movingAverages": {
      "ma20": 25.80,
      "ma50": 25.20,
      "ma200": 24.50
    },
    "rsi": 45.2,
    "macd": {
      "line": 0.25,
      "signal": 0.20,
      "histogram": 0.05
    },
    "bollinger": {
      "upper": 27.50,
      "middle": 25.50,
      "lower": 23.50
    }
  }
}
```

### Portfolio (Protected)

#### Get User Portfolio
```
GET /portfolio
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "portfolio_item_id",
      "company": { /* company object */ },
      "quantity": 100,
      "purchasePrice": 24.00,
      "purchaseDate": "2026-05-15",
      "currentValue": 2550.00,
      "gainLoss": 150.00,
      "gainLossPercent": 6.25
    }
  ],
  "summary": {
    "totalValue": 25000.00,
    "totalInvested": 24000.00,
    "totalGainLoss": 1000.00,
    "totalGainLossPercent": 4.17
  }
}
```

#### Add to Portfolio
```
POST /portfolio/add
Authorization: Bearer <token>
Content-Type: application/json
```

**Request:**
```json
{
  "companyId": "company_id",
  "quantity": 100,
  "purchasePrice": 24.00,
  "purchaseDate": "2026-06-21"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Added to portfolio successfully",
  "data": { /* portfolio item */ }
}
```

#### Remove from Portfolio
```
DELETE /portfolio/:id
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Removed from portfolio successfully"
}
```

### Alerts (Protected)

#### Create Alert
```
POST /alerts
Authorization: Bearer <token>
Content-Type: application/json
```

**Request:**
```json
{
  "companyId": "company_id",
  "alertType": "price",
  "threshold": 25.00,
  "condition": "below"
}
```

**Response:**
```json
{
  "success": true,
  "data": { /* alert object */ }
}
```

#### Get User Alerts
```
GET /alerts
Authorization: Bearer <token>
```

#### Delete Alert
```
DELETE /alerts/:id
Authorization: Bearer <token>
```

## Error Handling

All errors follow this format:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error
