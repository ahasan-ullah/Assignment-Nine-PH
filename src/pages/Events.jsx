import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  document.title="Events | Career Hub"
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/events.json");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Events and Workshops
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={event.photo}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between">
                  <h2 className="text-xl font-bold text-gray-800">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                  <p className="text-gray-700 mt-4">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Events;
