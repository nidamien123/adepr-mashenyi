# ADEPR Mashenyi Management System

A responsive church management dashboard built with React.js and Supabase, designed for ADEPR Mashenyi in Rusumu, Cyome Cell, Gatumba Sector, Ngororero District.

## Features
- Admin dashboard overview
- Members directory management
- Attendance monitoring
- Finance and donations tracking
- Church event planning
- Mobile-friendly responsive layout
- Supabase-ready configuration

## Tech Stack
- Frontend: React.js
- Backend: Supabase
- Database: PostgreSQL
- Auth: Supabase Auth
- Hosting: Vercel

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local environment file:
   ```bash
   cp .env.example .env
   ```
3. Add your Supabase URL and anon key.
4. Run the app:
   ```bash
   npm run dev
   ```

## Production deployment
Deploy this repository to Vercel and add the environment variables from `.env.example`.

## Project structure
- `src/App.jsx` — application layout and pages
- `src/data/mockData.js` — seed data used for demo screens
- `src/lib/supabase.js` — Supabase client setup
- `src/index.css` — styling and responsive layout
