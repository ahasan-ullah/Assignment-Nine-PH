import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import DetailsCard from "../components/DetailsCard";

const ServiceDetails = () => {
  document.title="Service | Career Hub"
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/services.json");
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
  const service = data.services.find((svc) => svc.id === parseInt(id));

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <DetailsCard service={service}></DetailsCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default ServiceDetails;
