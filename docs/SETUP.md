# Development Setup Guide

## Prerequisites

- Node.js 16+
- npm or yarn
- PostgreSQL 12+
- Redis (optional for local development)
- Git

## Installation Steps

### 1. Clone Repository
```bash
git clone https://github.com/luthosopotela1-cmyk/Quincy.git
cd Quincy
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Setup Backend

```bash
cd backend
npm install
cd ..
```

### 4. Setup Frontend

```bash
cd frontend
npm install
cd ..
```

### 5. Environment Configuration

Copy the example env file:
```bash
cp .env.example .env
```

Edit `.env` with your local settings:
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/quincy
REDIS_URL=redis://localhost:6379
PORT=3000
NODE_ENV=development
```

### 6. Database Setup

Create PostgreSQL database:
```bash
createdb quincy
```

Run migrations (when available):
```bash
cd backend
npm run migrate
cd ..
```

### 7. Start Development Server

From root directory:
```bash
npm run dev
```

This will start:
- Backend: http://localhost:3000
- Frontend: http://localhost:3000 (proxied through backend)

### Individual Commands

```bash
# Backend only
npm run server

# Frontend only
npm run client

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

## IDE Setup

### VS Code Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- TypeScript Vue Plugin
- PostgreSQL
- REST Client
- ESLint

### Settings (.vscode/settings.json)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Debugging

### Backend Debugging
Set breakpoints in VS Code and use:
```bash
node --inspect-brk ./dist/index.js
```

Then attach debugger in VS Code.

### Frontend Debugging
- Use Chrome DevTools (F12)
- React Developer Tools extension
- Redux DevTools for state management

## Common Issues

### Database Connection Error
```
Check PGUSER, PGPASSWORD, PGHOST environment variables
Ensure PostgreSQL is running: pg_isready
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Node Modules Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Project Structure Walkthrough

After setup, you'll have:
- `/backend` - Express API server
- `/frontend` - React application
- `/docs` - Documentation
- `.env` - Local environment variables
- `package.json` - Root workspace

## Next Steps

1. Read [ARCHITECTURE.md](./ARCHITECTURE.md) for system overview
2. Check [API.md](./API.md) for endpoint documentation
3. Start implementing features in `backend/src/routes/`
4. Create corresponding UI components in `frontend/src/`
