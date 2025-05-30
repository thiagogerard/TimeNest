# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


TimeNest — Task management with energy tracking and balance-focused
productivity

Problem Statement:
Most task management apps are centered around raw productivity: the more
tasks you complete, the better. This can easily lead to burnout, overload, and a
lack of awareness of personal limits.
TimeNest introduces a more mindful approach. Each task has an "energy weight,"
and users can track their available energy for the day — helping them plan better,
avoid overcommitment, and maintain a healthier productivity flow.

Technology Stack:

Frontend:
React.js
TailwindCSS
React Router
Axios
Recharts (for charts and analytics)

Backend:
Node.js + Express
MongoDB with Mongoose
JWT + bcrypt for authentication
CORS + Express middlewares

Deployment:
Vercel (Frontend)
Render or Railway (Backend)
GitHub for version control

Core Features:
Secure authentication (JWT, register/login)
Full CRUD for tasks
Tasks include an energy value (light, medium, heavy)
Daily energy tracking and limits
Weekly dashboard with insights and emoji mood indicators
User profile page
Public landing page for visitors

User Stories:

Regular User:
As a user, I want to assign energy weights to tasks so I can balance my
workload
As a user, I want to track how much energy I’ve used each day
As a user, I want to visualize my weekly balance and task categories
As a user, I want a clean and responsive interface to manage tasks

Admin (optional):
As an admin, I want to view users and basic usage statistics
As an admin, I can manage or promote users if needed

Database Entities (Core Models):
User : name, email, password (hashed), dailyEnergy (default: 100)
Task : title, category, weight (10, 25, 40), status, dueDate, userId
Session (optional): date, tasksCompleted, energyUsed
