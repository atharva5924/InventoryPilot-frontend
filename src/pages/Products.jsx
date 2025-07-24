import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantityUpdates, setQuantityUpdates] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://inventorypilot-backend-ib2e.onrender.com/products?page=1&limit=10",
        {
          withCredentials: true,
        }
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantityUpdates({ ...quantityUpdates, [id]: value });
  };

  const updateQuantity = async (id) => {
    const newQuantity = parseInt(quantityUpdates[id]);
    if (isNaN(newQuantity)) return;

    try {
      await axios.put(
        `https://inventorypilot-backend-ib2e.onrender.com/products/${id}/quantity`,
        { quantity: newQuantity },
        {
          withCredentials: true,
        }
      );
      fetchProducts();
    } catch (err) {
      console.error("Failed to update quantity", err);
    }
  };

  const logout = async () => {
    await axios.post(
      "https://inventorypilot-backend-ib2e.onrender.com/users/logout",
      {},
      {
        withCredentials: true,
      }
    );
    navigate("/");
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://inventorypilot-backend-ib2e.onrender.com/products/${productId}`, {
        withCredentials: true,
      });
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Products
      </h1>
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={() => navigate("/add")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md ml-2 mr-4 hover:scale-105 transition-transform duration-200"
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => navigate("/analytics")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md ml-2 mr-4 hover:scale-105 transition-transform duration-200"
        >
          📊 View Analytics
        </button>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-2 mr-4 hover:scale-105 transition-transform duration-200 "
        >
          Logout
        </button>
      </div>
      {loading ? (
        <div className="text-center py-10 text-gray-500 font-medium">
          Loading products...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col justify-between"
            >
              <div>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-40 object-contain rounded-md mb-4 bg-white"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.type}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {product.description}
                </p>
                <p className="mt-2 font-medium text-gray-800">
                  SKU: {product.sku}
                </p>
                <p className="mt-1 text-blue-500 font-bold">
                  ₹ {product.price}
                </p>
                <p className="text-sm mt-1">
                  Current Quantity: {product.quantity}
                </p>
              </div>

              <div className="mt-4">
                {/* First row: input and update */}
                <div className="flex gap-2 mb-2">
                  <input
                    type="number"
                    placeholder="New quantity"
                    onChange={(e) =>
                      handleQuantityChange(product._id, e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={() => updateQuantity(product._id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Update
                  </button>
                </div>

                {/* Second row: edit and delete */}
                <div className="flex justify-between gap-2">
                  <button
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
