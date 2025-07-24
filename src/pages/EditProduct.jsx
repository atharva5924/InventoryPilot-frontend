import { use, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    sku: "",
    type: "",
  });
  const [image, setImage] = useState(null);
 

  useEffect(() => {
    
    setForm({
      name: "",
      description: "",
      price: "",
      sku: "",
      type: "",
    });
    setImage(null);

    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://inventorypilot-backend-ib2e.onrender.com/products", {
          withCredentials: true,
        });
        const product = res.data.find((p) => p._id === productId);
        if (product) {
          setForm({
            name: product.name || "",
            description: product.description || "",
            price: product.price || "",
            sku: product.sku || "",
            type: product.type || "",
          });
        }
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };

    // Delay fetch slightly to ensure form clear applies
    setTimeout(fetchProduct, 0);
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    if (image) formData.append("image", image);

    try {
      await axios.put(`https://inventorypilot-backend-ib2e.onrender.com/products/${productId}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/products");
      
    } catch (err) {
      console.error("Edit failed", err);
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-transparent">
      <div className="bg-white/60 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl px-10 py-8 w-full max-w-md transition-all duration-500 ease-in-out transform hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-700 drop-shadow-sm tracking-wide">
          Edit Product ✏️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: parseFloat(e.target.value) || "" })
              }
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
            />
          </div>


          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              SKU
            </label>
            <input
              type="text"
              value={form.sku}
              onChange={(e) => setForm({ ...form, sku: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              type="text"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>
          <div className="flex flex-row">
            <button
              type="submit"
              className="w-50 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 rounded-xl shadow-lg transition duration-300 mx-3"
            >
              Save Changes
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

export default EditProduct;
