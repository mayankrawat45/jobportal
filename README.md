# 🚀 Job Portal - MERN Stack Application

A full-featured Job Portal built using the MERN Stack that connects job seekers with recruiters. The application provides separate portals for Candidates and Recruiters/Admin with secure authentication, job management, resume uploads, interview questions, and application tracking.

---

## 📌 Features

### 👨‍💼 Candidate Portal
- User Registration & Login
- JWT Authentication
- View Latest Jobs
- Search & Filter Jobs
- Apply for Jobs
- Save/Unsave Jobs
- Upload Resume
- Edit Profile
- View Applied Jobs
- View Saved Jobs
- Company Details
- Responsive UI

---

### 🏢 Recruiter/Admin Portal
- Secure Admin Login
- Dashboard with Statistics
- Add New Jobs
- Edit Jobs
- Delete Jobs
- Manage Job Applications
- View Candidate Profiles
- View & Download Resumes
- Company Management
- Interview Question Management
- CSV Upload Support
- Role Management

---

### 💼 Interview Preparation Module
- Company Wise Interview Questions
- Role Wise Questions
- Search Companies
- Search Roles
- Upload Questions using CSV
- Detailed Answers
- Key Points
- Recently Asked Questions

---

### 🔐 Authentication & Security
- JWT Authentication
- Protected Routes
- Password Hashing (bcrypt)
- Role-Based Authorization
- Secure API Access

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- Tailwind CSS
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Cloud Services
- MongoDB Atlas
- Cloudinary

### Deployment
- Frontend : Vercel
- Admin : Vercel
- Backend : Render

---

# 📂 Project Structure

```
JobPortal/
│
├── frontend/        # Candidate Portal
├── admin/           # Recruiter/Admin Panel
├── backend/         # Express API
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/jobportal.git

cd jobportal
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME

CLOUDINARY_API_KEY=YOUR_API_KEY

CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create

```
.env
```

```env
VITE_API_URL=http://localhost:5000
```

Run

```bash
npm run dev
```

---

## Admin Setup

```bash
cd admin

npm install
```

Create

```
.env
```

```env
VITE_API_URL=http://localhost:5000
```

Run

```bash
npm run dev
```

---

# 📷 Screenshots

> Add screenshots of the following pages.

- Home Page
- Job Listing
- Job Details
- Candidate Dashboard
- Admin Dashboard
- Add Job
- Interview Questions
- Candidate Profile

---

# 🌐 Deployment

Frontend

```
Vercel
```

Admin

```
Vercel
```

Backend

```
Render
```

Database

```
MongoDB Atlas
```

---

# 🔑 Environment Variables

Backend

```
PORT

MONGODB_URI

JWT_SECRET

CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET
```

Frontend/Admin

```
VITE_API_URL
```

---

# 📈 Future Improvements

- Email Notifications
- Google Authentication
- Company Verification
- AI Resume Analysis
- AI Interview Preparation
- Chat System
- Notifications
- Job Recommendation System
- Recruiter Analytics
- Admin Reports

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Mayank Singh Rawat**

GitHub: https://github.com/mayankrawat45

LinkedIn: *(Add your LinkedIn Profile)*

Portfolio: *(Add your Portfolio URL)*

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

## 📄 License

This project is licensed under the MIT License.