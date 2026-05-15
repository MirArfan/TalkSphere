# TalkSphere - Full Stack Real-Time Chat Application

TalkSphere is a production-ready, full-stack real-time chat application built using the MERN ecosystem. It features robust JWT-based authentication, instant messaging powered by WebSockets, advanced cloud-native storage, and comprehensive API security filtering.

<!-- <br>

## 🚀 Deployment & Repository Links
- **Live Application Link:** [Insert your Sevalla Live Link Here]
- **Backend API Endpoint:** [Insert your Server Live Link Here] -->

<br>

## 📸 App Screenshots

###  Login Page 

 ![Login](./screenshots/login.png) 
 
 ### Chat Interface 
 ![Chat](./screenshots/chat.png) 



<br>

## ✨ Key Features & Highlights

- **🔐 Custom Auth Mechanism:** Secure user signup, login, and logout functionalities utilizing custom JSON Web Tokens (JWT) stored safely in HTTP-Only cookies (No third-party auth providers used).
- **⚡ Real-Time Communications:** Instant message delivery and event broadcasting driven by **Socket.io**.
- **🟢 Presence & Activity Tracking:** Dynamic online/offline status indicators for active users.
- **🔔 Interactive UX Elements:** Built-in notification alerts and typing sounds with a user-controlled toggle switch.
- **📨 Automated Email Workflows:** Triggering responsive, customized welcome emails immediately upon successful registration via **Resend API**.
- **🗂️ Cloud Media Storage:** Seamless profile picture updates with asynchronous base64 uploads handled by **Cloudinary**.
- **🚦 Cloud-Native Security:** API Shielding, intelligent bot detection, and strict request rate-limiting powered by **Arcjet**.
- **🎨 Modern UI/UX:** Built using React, Tailwind CSS, and styled components from **DaisyUI**.
- **🧠 Lightweight State Management:** Centralized frontend state machine governed by **Zustand** (eliminating Redux boilerplate).
- **🧑‍💻 Enterprise Git Workflow:** Managed strictly using standard development practices including branching, Pull Requests (PRs), and structural merges.


## 🛠️ Technical Stack
- **Frontend:** React.js, Tailwind CSS, DaisyUI, Zustand, Axios, Socket.io-client
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** MongoDB, Mongoose 
- **Third-Party Integrations:** Cloudinary (Media), Resend (Email), Arcjet (Security Firewall)

<br>

## 🛣️ API Endpoints Reference

### 🔐 Authentication API (`/api/auth`)
*Note: Arcjet Security Protection is applied globally to all Auth routes.*

| Method | Endpoint | Description |
| :--- | :--- | :--- | 
| `POST` | `/api/auth/signup` | Register a new user & trigger Welcome Email | 
| `POST` | `/api/auth/login` | Authenticate user & issue JWT Cookie | 
| `POST` | `/api/auth/logout` | Clear JWT Cookie & log out user | 
| `PUT` | `/api/auth/update-profile` | Upload profile picture to Cloudinary | 
| `GET` | `/api/auth/check` | Validate session and return current user data |

### 💬 Messages & Chat API (`/api/message`)
*Note: All Message routes are globally protected by `protectRoute` middleware.*

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/message/contacts` | Fetch all available contacts | 
| `GET` | `/api/message/chats` | Fetch unique chat partners list (Sidebar) |
| `GET` | `/api/message/:id` | Get full message history with a specific user | 
| `POST` | `/api/message/send/:id` | Send a message to a specific user (Real-time) |  


<br>

## ⚙️ Environment Variables Setup

Create a `.env` file inside the root of your `backend` directory and configure the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

ARCJET_KEY=your_arcjet_api_key
ARCJET_ENV=development
```


## Backend Server Setup:

```Bash
cd backend
npm install
npm run dev
```
## Frontend Client Setup:

```Bash
cd frontend
npm install
npm run dev
```