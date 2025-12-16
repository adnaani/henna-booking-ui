# Henna Booking System — Frontend (Angular)

Modern Angular frontend for the Henna Booking System. Built with standalone APIs, Docker, and Nginx to pair seamlessly with the NestJS backend.

This frontend handles:
- Public booking flows (customers)
- Admin dashboard (artist/admin)
- API communication with the backend
- Production-ready static hosting via Docker + Nginx

## Project Goals
- Modern Angular (standalone components, no NgModules)
- Clear split between public and admin areas
- Production-safe deployment (no `ng serve` in prod)
- Simple local dev with hot reload
- Dockerised flow that mirrors real deployments

## Tech Stack
- Angular 17+ (standalone APIs)
- TypeScript
- Standalone Router
- HttpClient
- Docker
- Nginx (static hosting + reverse proxy)
- Prettier

## Project Structure
```
src/
├─ app/
│  ├─ core/        # services (API, interceptors)
│  ├─ public/      # public booking pages
│  ├─ admin/       # admin dashboard
│  ├─ app.component.ts
│  ├─ app.config.ts
│  └─ app.routes.ts
├─ environments/
│  ├─ environment.ts
│  └─ environment.prod.ts
└─ main.ts
```
Key points: no NgModules; all components are `standalone: true`; routing provided via `provideRouter`.

## Environment Configuration
`environment.ts` (local development)
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

`environment.prod.ts` (Docker / production)
```ts
export const environment = {
  production: true,
  apiUrl: '/api',
};
```
In production, API requests are proxied through Nginx to the backend.

## Running the App
1) Local development (hot reload)
```
npm install
npm start
```
Serves via `ng serve` at http://localhost:4200.

2) Production build (Angular only)
```
npm run build
```
Outputs optimized static files to `dist/`.

## Docker & Deployment
- Frontend is served as static files by Nginx; Angular is not run in Docker.
- Typical Dockerfile flow:
  - Stage 1: Build Angular app with Node
  - Stage 2: Copy build into Nginx image
- Results: small image, no Node.js in prod, fast startup, secure deployment.

Nginx responsibilities:
- Serve Angular static files
- Handle client-side routing (`try_files`)
- Proxy API calls from `/api/*` → backend container

Example scripts (adjust to your setup):
- Build image: `npm run docker:build`
- Run FE container: `npm run docker:run` (serve at http://localhost:8080)
- Full stack (FE + BE + DB): `npm run docker:up:build`
- View logs: `npm run docker:logs`
- Stop containers: `npm run docker:down`

## Backend Connectivity
- Local (no Docker): Angular → `http://localhost:3000`
- Docker / prod: Angular → `/api` → Nginx → backend container

## Formatting
```
npm run format
```
Uses Prettier (Angular HTML supported).

## Deliberately Avoids
- NgModules
- Running `ng serve` in Docker
- Hard-coded backend URLs in prod
- Complex runtime env injection

## Roadmap
- Booking flow UI
- Availability calendar
- Admin dashboard features
- Auth guards
- Styling & UX polish
- CI/CD integration

## Author Notes
Designed to reflect modern Angular best practices, integrate cleanly with NestJS, deploy on a single EC2 instance, and scale without rewrites.
