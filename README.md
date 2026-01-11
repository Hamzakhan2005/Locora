
# 🤝 Locora – Community Help Platform

Locora is a **full-stack web application** designed to connect people in need of help with community members who can assist. It enables real-time communication, collaboration, and trust-building through chat, notifications, and role-based access.

* **Live Demo**: https://locora.vercel.app/
---

## 🌟 Features

* 📝 **Help Requests** – Users can post help requests with details.
* 🙋 **Offer to Help** – Community members can respond to posts and offer help.
* 🔔 **Real-Time Notifications** – Instant alerts when someone comments, accepts to help, or posts nearby.
* 💬 **Real-Time Chat** – Secure 1:1 chat between requesters and helpers.
* 👤 **Role-Based Access** – Admins can manage users and remove spam posts, while regular users manage only their own posts.
* 🔒 **Authentication** – Secure login & JWT-based authentication.
* 📱 **Responsive UI** – Modern interface built with Next.js + Tailwind CSS.

---

## 🛠 Tech Stack

**Frontend (Client):**

* [Next.js](https://nextjs.org/) – React framework for UI & routing
* [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
* [Socket.IO Client](https://socket.io/) – Real-time communication
* Context API – State management

**Backend (Server):**

* [Express.js](https://expressjs.com/) – Node.js backend framework
* [MongoDB + Mongoose](https://mongoosejs.com/) – Database & ODM
* [Socket.IO](https://socket.io/) – WebSocket-based real-time features
* JWT Authentication – Secure login system

---

## 📂 Project Structure

```
Locora/
├── backend/                 # Backend (Express + MongoDB)
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth, error handling, etc.
│   ├── models/              # Database schemas
│   ├── routes/              # API routes
│   ├── server.js            # Entry point
│   └── package.json         # Backend dependencies
│
├── client/                  # Frontend (Next.js)
│   ├── app/                 # Next.js app router pages
│   ├── public/              # Static assets
│   ├── components.json      # Shared UI components config
│   ├── tailwind.config.js   # Tailwind setup
│   ├── next.config.mjs      # Next.js config
│   └── package.json         # Frontend dependencies
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Hamzakhan2005/Locora.git
cd Locora
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run backend server:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Run frontend:

```bash
npm run dev
```

---

## 🚀 Usage

* Visit frontend at **[http://localhost:3000](http://localhost:3000)**
* API served at **[http://localhost:5000](http://localhost:5000)**
* Create an account, post help requests, offer help, and chat in real time.

---

## 🔑 Roadmap / Future Enhancements

* ✅ Better spam detection with AI
* ✅ Push notifications (browser/mobile)
* ✅ Group chat support
* ✅ Location-based request filtering

---

## 📬 Contact

* **GitHub**: [Hamzakhan2005](https://github.com/Hamzakhan2005)
* **Email**: mohdhamzakhan2005@gmail.com

---

👉 Locora is built with the vision of **empowering communities through collaboration**.

