# 🧮 InventoryPilot

A full-stack MERN application to manage product inventory with authentication, image uploads, quantity tracking, and analytics.

**Tagline:** *"Simplify. Track. Grow."*

---

### 🚀 Live Demo

🔗 [Deployed Live on Vercel](https://pin-point-map-frontend.vercel.app/)<br>
📂 [Backend GitHub Repository](https://github.com/atharva5924/InventoryPilot-backend)


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

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/atharva5924/InventoryPilot-frontend.git
cd PinPointMap-frontend
```

### 2. Frontend Setup

```bash
git clone https://github.com/atharva5924/PinPointMap-frontend.git
npm install
# Create .env if needed
npm run dev
```

### 3. Backend Setup

```bash
git clone https://github.com/atharva5924/PinPointMap-backend.git
cd PinPointMap-backend
npm install
```
### Create .env with MONGO_URI and PORT (e.g. 5000)
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
```
npm start
```
---

## 📦 API Endpoints

### 🧑 Auth Routes

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| POST   | `/register`  | Register new user    |
| POST   | `/login`     | Login existing user  |
| GET    | `/logout`    | Logout current user  |

---

### 📦 Product Routes

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/products`      | Get all products    |
| POST   | `/products`      | Add new product     |
| PUT    | `/products/:id`  | Edit product        |
| DELETE | `/products/:id`  | Delete product      |

> ⚠️ All product routes require authentication via cookies.

---

## Project Structure

```bash
ims-backend/
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── uploads/ (optional if storing locally)
├── .env
├── server.js
│
ims-frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
```

---

## 🧩 Screenshots

## 📸 UI Screenshots

### 🧑‍💼 Login Page

Simple and clean login interface for authenticated access to the portal.

![Input Form](./screenshots/loginPage.png)

---

### 📝 Register Page

User registration screen to securely create a new account.

![Input Form](./screenshots/registerPage.png)

---

### 🏠 Dashboard – Inventory Overview

Main interface after login, showing product inventory and quick actions.

![Input Form](./screenshots/dashboard.png)

---

### ✏️ Add New Product

Form to add a new product to the inventory with quantity and pricing details.

![Input Form](./screenshots/addNewProduct.png)

---

### 🛠️ Edit Product

Edit existing product details like name, price, or quantity.

![Input Form](./screenshots/editProduct.png)

---

### 🔄 Update Product Quantity

Quickly increase or decrease stock count using the quantity update UI.

![Input Form](./screenshots/updateProduct.png)

---

### 📊 Inventory Bar Chart

Bar chart visualization of product count by category/type.

![Input Form](./screenshots/barChart.png)

---

### 🥧 Inventory Pie Chart

Pie chart showing proportion of different product categories in the inventory.

![Input Form](./screenshots/pieChart.png)

---

### ✅ Notes

- All screenshots are captured with real sample data inserted for demonstration.
- UI is fully responsive and clean, ensuring a great experience across devices.

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) or a similar API client to test the backend API routes.

- ✅ Make sure to **enable cookies** when testing **protected routes** like product CRUD operations.
- 🔐 Authenticated routes rely on `HTTP-only` cookies for session management.

---

### 👨‍💻 Developer

**Atharva Nile**
CSE Undergrad @ IIIT Nagpur
📧 atharvanile2005@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/atharva-nile-a50120294) • [GitHub](https://github.com/atharva5924)

---

Let me know if you want:
- A Hindi/Marathi short version.
- Screenshot placeholders added.
- Frontend live preview deployed on Vercel.
- Custom badges or GIF recording.

I'll tailor the README further based on your preferences or interviewer expectations.


---


