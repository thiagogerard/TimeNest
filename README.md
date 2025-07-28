# TimeNest 🪺

**TimeNest** is a habit-building task manager that helps users organize daily priorities, track energy, and build consistency. The app offers an intuitive dashboard, dynamic energy system, and visual weekly reports — all designed to make productivity feel sustainable.

---

## 🔗 Live Demo

- **Frontend:** https://time-nest-js5cbdc9u-thiagogerards-projects.vercel.app  
- **Backend API:** https://timenest-production.up.railway.app

---

## ✨ Features

- ✅ Secure user authentication (JWT)
- ✅ Daily energy tracking and depletion system
- ✅ Create, complete, edit, and delete tasks
- ✅ Tasks categorized by energy weight (Light, Medium, Heavy)
- ✅ Weekly report with interactive bar chart (Recharts)
- ✅ Custom profile page with energy settings and manual refresh
- ✅ Responsive design with Tailwind CSS
- ✅ Protected routes with token validation
- ✅ Custom 404 page

---

## 🖥 Tech Stack

**Frontend:**
- React
- React Router
- Tailwind CSS
- Axios
- Recharts
- React Toastify

**Backend:**
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- node-cron (daily reset)

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo

```bash
git clone https://github.com/thiagogerard/TimeNest.git
cd TimeNest
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file with:

```env
PORT=5001
JWT_SECRET=yourSecret
MONGODB_URI=yourMongoConnectionString
```

Start the server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open: http://localhost:3000

---

## 📊 API Endpoints

**Auth**
- POST /api/auth/register – Register user  
- POST /api/auth/login – Login user  
- GET /api/auth/me – Get current user  

**Tasks**
- GET /api/tasks – List tasks  
- POST /api/tasks – Create task  
- PUT /api/tasks/:id – Update task  
- DELETE /api/tasks/:id – Delete task  

**Reports**
- GET /api/report/weekly – Weekly task stats  

---

## 🙋 Author

Created by [Thiago Geraldi](https://github.com/thiagogerard)

---

## 🧪 To Do (future improvements)

- 🎯 Tag system for categories  
- 📱 Mobile drag-and-drop tasks  
- ⏰ Reminder notifications  
- 🧠 Gamified streak system

---

## 📄 License

MIT
