# 🧮 InventoryPilot

A full-stack MERN application to manage product inventory with authentication, image uploads, quantity tracking, and analytics.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login/Logout)
- 📦 Product Management (Add, List, Update Quantity)
- 📊 Basic Analytics (Top Products, Total Count)
- 🌁 Image Upload via Cloudinary
- 🧭 Swagger Docs at `/api-docs`
- 🎨 Responsive React UI using Tailwind CSS + Vite
- ⚙️ Role-based JWT Authentication with Cookies

---

## 📁 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Cloudinary**: Image upload handling via multer-cloudinary
- **Auth**: JWT (stored in cookies)
- **Docs**: Swagger (OpenAPI 3.0)

---

## 🔧 Setup

### 📦 Backend

```bash
cd backend
npm install
touch .env
```
## Add this to .env:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
npm run dev
```

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📄 API Endpoints

📚 **Swagger Docs:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

| Method | Endpoint                        | Description                             |
|--------|----------------------------------|-----------------------------------------|
| POST   | `/register`                     | Register a new user                     |
| POST   | `/login`                        | Login and receive JWT                   |
| POST   | `/users/logout`                 | Logout user                             |
| GET    | `/products?page=1&limit=10`     | Get paginated list of products          |
| POST   | `/products` (multipart/form)    | Add new product (with image upload)     |
| PUT    | `/products/:id/quantity`        | Update product quantity                 |
| GET    | `/analytics/top-products`       | Get top 5 products by quantity          |
| GET    | `/analytics/stats`              | Get product statistics summary          |

---


