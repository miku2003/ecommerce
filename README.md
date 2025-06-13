
# Arpico Online: Real-Time Delivery Tracking App

A real-time delivery tracking system developed for Arpico, one of Sri Lanka’s leading retail brands. This mobile-first platform enhances transparency and efficiency in grocery deliveries through real-time GPS tracking, secure role-based access, and seamless coordination between customers, delivery partners, and admins.

---

## 🚀 Features

- 📱 **Customer App**: Browse products, place orders, and track deliveries live on Google Maps.
- 🚚 **Delivery Partner App**: Receive orders, update delivery status, and share real-time location.
- 🛠️ **Admin Panel**: Manage users, branches, orders, and products via a secure AdminJS dashboard.
- 📡 **Real-Time Updates**: Powered by Socket.IO for live location sharing and order status sync.
- 🔐 **Secure Access**: Role-based login and session management using JSON Web Tokens (JWT).

---

## 🏗️ Tech Stack

### 📱 Frontend
- React Native (Customer & Delivery apps)
- Google Maps API
- React Navigation
- Axios

### 🌐 Backend
- Node.js with Fastify
- Socket.IO
- JWT Authentication

### 🗄️ Database
- MongoDB Atlas (cloud-hosted NoSQL)
- Mongoose

### ⚙️ Admin Dashboard
- AdminJS (web-based admin control panel)

### 🔧 DevOps & Tools
- Git & GitHub
- Dotenv (env variables)
- CI/CD (Render or Vercel)
- Visual Studio Code

---

## 📦 Setup & Installation

### 🔹 Server Setup
```bash
cd server
npm install --force
npm start
```
Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)  
**Login**:  
- Email: `km@gmail.com`  
- Password: `12345678`

### 🔹 Client Setup
```bash
cd client
npm install --force
npm run android   # or: npm run ios
```
**Logins**:  
- Delivery Partner → Email: `delivery@gmail.com` | Password: `12345678`  
- Customer → Phone: `07622253344`

---

## 📸 Screenshots

- 🗺️ Real-time delivery map  
- 🛒 Order placement & status update  
- 🧑‍💼 Admin dashboard overview  

*(Add screenshots to a folder like `/assets/screenshots` if needed)*

---

## 📊 Project Highlights

- Built using React Native + Fastify + MongoDB
- Real-time GPS delivery tracking with Socket.IO
- JWT-secured login for customer, driver & admin roles
- Validated by user survey (88.9% want UberEats-style tracking)

---

## 📈 Future Enhancements

- 💳 Add Stripe or mobile payments
- 🔔 Push notification system
- 🧾 Full eCommerce cart & checkout
- 📦 Inventory & order history views

---

## 💡 Lessons Learned

- Importance of socket reconnection & real-time sync
- Building scalable role-based architecture
- UI responsiveness across devices
- Incorporating survey feedback into design

---

## 📄 License

This project is part of a final-year academic submission.  
Unauthorized commercial use is prohibited.

---

## 👤 Author

**Rukmalage Perera**  
BSc (Hons) Computer Science – NSBM Green University (Plymouth University Affiliation)  
Supervisor: Ms. Dulanjali Wijesekara
