# Sk~HealthCare Backend

Node.js + Express + MongoDB backend for Sk~HealthCare doctor appointment system.

## Features

- 🔐 JWT Authentication (User, Doctor, Admin)
- 👨‍⚕️ Doctor Management
- 📅 Appointment Booking
- 👤 User Profile Management
- 📊 Admin Dashboard APIs
- ☁️ Cloudinary Image Upload

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- Cloudinary
- Multer

## Setup

```bash
npm install
npm run server
```

## Environment Variables

Create `.env` file:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=admin@prescripto.com
ADMIN_PASSWORD=admin123
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
```

## API Endpoints

- `/api/user` - User routes
- `/api/doctor` - Doctor routes
- `/api/admin` - Admin routes

## License

Copyright 2026@ Sk~HealthCare - All Rights Reserved
