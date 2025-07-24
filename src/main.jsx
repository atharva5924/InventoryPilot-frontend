import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Analytics from "./pages/Analytics";
import Register from "./pages/Register";
import EditProduct from "./pages/EditProduct";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="/edit-product/:productId" element={<EditProduct  />} />
      </Route>
    </Routes>
  </Router>
);
