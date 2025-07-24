import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    sku: "",
    description: "",
    quantity: "",
    price: "",
    image: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setUploading(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("type", formData.type);
      form.append("sku", formData.sku);
      form.append("description", formData.description);
      form.append("quantity", formData.quantity);
      form.append("price", formData.price);
      form.append("image", formData.image); 

      await axios.post("https://inventorypilot-backend-ib2e.onrender.com/products", form, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Product added successfully!");
      setFormData({
        name: "",
        type: "",
        sku: "",
        description: "",
        quantity: "",
        price: "",
        image: null,
      });
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to add product");
    }

    setUploading(false);
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center   px-4">
      <div className="bg-white/60 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl px-10 py-8 w-full max-w-xl transition-all duration-500 ease-in-out transform hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-700 drop-shadow-sm tracking-wide">
          Add New Product 📦
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          {success && (
            <p className="text-sm text-green-600 text-center">{success}</p>
          )}
          {uploading && (
            <p className="text-sm text-blue-500 text-center">
              Uploading image...
            </p>
          )}

          {["name", "type", "sku", "description", "quantity", "price"].map(
            (field) => (
              <div key={field}>
                <label className="block mb-1 text-sm font-medium text-gray-700 capitalize">
                  {field}
                </label>
                <input
                  type={
                    field === "quantity" || field === "price"
                      ? "number"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
                  required
                />
              </div>
            )
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
            <button
              type="submit"
              disabled={uploading}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition duration-300"
            >
              {uploading ? "Uploading..." : "Add Product"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto text-blue-700 hover:underline font-medium py-2"
            >
              ← Back to Products
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
