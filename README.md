# iFixpedia API

A REST API for a device repair service platform that connects customers with technicians. 

> Status: under construction (started Oct 31, 2026)

## Background
Finding a trustworthy technician to repair a phone or laptop is often hard: prices are unclear, quality is uncertain, and there is no easy way to compare offers. iFixpedia aims to solve this by letting customers post a repair request, receive quotes from technician, and review the services afterward. It also provides repair guide articles for common problems.

##Roles
- Customer: create service request, accept or reject quotes, leave reviews, and read repair articles.
- Technician: manage a profile, browse open requests, send quotes, and update the repair status.
- Admin: manage service categories and articles, and view all data.

## Core Flow
1. A customer creates a service requests (SUBMITTED).
2. Technicians browse open request and send quotes.
3. The customer accept one quote (ACCEPTED); the others are rejected.
4. The technician starts the repair (IN_PROGRESS).
5. The technician marks the job as done (COMPLETED).
6. The customer leaves a rating and reviews.

   ##Planned Features
   - [ ] Authentication with JWT and role-based access control
   - [ ] Service request and quote management with a status workflow
   - [ ] Reviews and technician ratings
   - [ ] Repair guide articles with search and pagination
   - [ ] API documentation (OpenAPI / Swagger)
   - [ ] Automated tests and CI/CD
   - [ ] Docker setup and public deployment

   ## Tech Stack
   - Node.js, Express, TypeScript
   - PostgreSQL (planned)
   - Zod for validation (planned)
   - Vitest and Supertest for testing (planned)
   - Docker and GitHub Actions (planned)
  
   ## Getting Started
   Comming soon.

   ## Roadmap
   - M1 Data foundation: Express + Typescript setup, PostgreSQL, migrations, CRUD for categories and articles.
   - M2 Core business logic: authentication, roles, service request and quote flow, review, pagination, OpenAPI docs.
   - M3 Productio-ready: layered architecture, tests, Docker, CI/CD, deployment, caching, and a job queue.
     
   ## Notes
  Built solo as hands-on project to learn backend development with Node.js, Express, and TypeScript. 
   
