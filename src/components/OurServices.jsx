import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const data = useLoaderData();
  return (
    <div className="mt-5 lg:mt-10">
      <div className="md:w-2/3 mx-auto text-center space-y-3">
        <h1 className="font-bold text-2xl">Our Services</h1>
        <p className="text-gray-500">
          Our services are designed to help you navigate life's challenges,
          enhance your skills, and achieve your personal and professional goals.
          Whether you're seeking career development, or life coaching, our
          experienced counselors are here to provide the guidance you need to
          make meaningful progress.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {
          data.services.map((card,id)=><ServiceCard card={card} key={id}></ServiceCard>)
        }
      </div>
    </div>
  );
};
export default OurServices;
