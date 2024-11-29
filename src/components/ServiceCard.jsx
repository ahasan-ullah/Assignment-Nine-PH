import { useNavigate } from "react-router-dom";

const ServiceCard = ({ card }) => {
  const navigate=useNavigate();
  const handleLearnMore=()=>{
    navigate(`/services/${card.id}`);
  }
  return (
    <div className="max-w-sm rounded-lg border overflow-hidden p-4 flex flex-col h-full">
      <div className="relative">
        <img
          className="w-full h-48 object-cover border"
          src={card.image_url}
          alt={card.service_name}
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{card.service_name}</h3>
        <p className="text-sm text-gray-600 mt-2">Category: {card.category}</p>
        <p className="text-sm text-gray-600 mt-2">Price: {card.pricing}</p>
        <p className="text-sm text-gray-600 mt-2">Counselor: {card.counselor}</p>
      </div>
      <div className="px-4 pb-4 flex-shrink-0">
        <button onClick={handleLearnMore} className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-transparent hover:text-black hover:border transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
