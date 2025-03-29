# E-Commerce Website with User Authentication

## 🚀 Project Overview
This is a full-stack e-commerce application built using **Node.js**, **MongoDB**, **React**, and **Tailwind CSS**. The project includes user authentication, product management, and a seamless shopping experience.

## 📌 Features
- User authentication using **Clerk** and **Inngest**
- Secure login and registration
- Product listing and management
- Shopping cart functionality
- Payment integration (Optional)
- Responsive UI using **Tailwind CSS**

## 🛠 Tech Stack
- **Frontend**: React, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Clerk
- **Event Handling**: Inngest

## ⚙️ Installation & Setup
1. Clone the repository:
   ```sh
   https://github.com/ApsaraWitharana/E-Commerce-App-Next.js.git
   ```

2. Install dependencies:
   ```sh
   npm install
   cd backend && npm install
   ```

3. Set up environment variables in `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection
   CLERK_SECRET_KEY=your_clerk_secret_key
   INNGEST_SECRET_KEY=your_inngest_secret_key
   ```

4. Run the backend:
   ```sh
   cd backend
   node server.js
   ```

5. Run the frontend:
   ```sh
   cd frontend
   npm start
   ```

## 🛒 API Endpoints
- **User Authentication**
  - `POST /api/auth/register` - Register user
  - `POST /api/auth/login` - Login user
  - `GET /api/auth/user` - Get user details

- **Products**
  - `GET /api/products` - Get all products
  - `POST /api/products` - Add new product (Admin)
  - `DELETE /api/products/:id` - Delete product (Admin)

## 🛡️ Security
- JWT authentication
- Secure API routes
- Environment variables for sensitive data

## 🎨 UI Design
The frontend uses **Tailwind CSS** for a responsive and clean design. 

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

<div align="center">

#### This project is licensed under the [MIT License](LICENSE)

#### © 2025 All Right Reserved, Designed By [Sachini Apsara](https://github.com/ApsaraWitharana)

</div>

