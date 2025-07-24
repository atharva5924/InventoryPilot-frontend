import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [role, setRole] = useState(""); 
  const navigate = useNavigate();
  const COLORS = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f97316"];

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "https://inventorypilot-backend-ib2e.onrender.com/analytics/top-product-types",
        {
          withCredentials: true,
        }
      );
      setData(res.data);
    } catch (err) {
      console.error("Error fetching analytics", err);
    }
  };

  const fetchUserRole = async () => {
    try {
      const res = await axios.get("https://inventorypilot-backend-ib2e.onrender.com/users/me", {
        withCredentials: true,
      });

    
      setRole(res.data.data.role);
      if (res.data.data.role !== "admin") {
        alert("You do not have permission to view this page.");
        navigate("/products");
      }
    } catch (err) {
      console.error("Failed to fetch user role", err);
    }
  };

  useEffect(() => {
    fetchUserRole();
    fetchAnalytics();
  }, []);

  return (
    <div className="min-h-screen   px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-600">Top Product Types</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Products
          </button>
        </div>

        {role === "admin" ? (
          data.length === 0 ? (
            <p className="text-gray-500 text-center">
              No analytics data available
            </p>
          ) : (
            <div className="space-y-8">
              <div className="bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white/80 rounded-2xl p-4 shadow-lg backdrop-blur">
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="count"
                      nameKey="type"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )
        ) : (
          <p className="text-center text-red-500 font-semibold">
            Only admins can view this page.
          </p>
        )}
      </div>
    </div>
  );
};

export default Analytics;
