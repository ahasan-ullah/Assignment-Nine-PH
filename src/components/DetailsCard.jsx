import { useState } from "react";

const DetailsCard = ({ service }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
      setComments([...comments, comment]);
      setComment("");
  };

  return (
    <div>
      <div className="rounded-lg p-6 w-full md:grid md:grid-cols-12 md:gap-5">
        <div className="md:col-span-8">
          <img
            className="w-full lg:h-[400px] object-cover"
            src={service.image_url}
          />
          <h2 className="text-2xl font-bold py-2">{service.service_name}</h2>
          <p className="text-gray-600 mb-2">{service.brief_description}</p>
          <ul className="text-gray-700 space-y-3 mt-8">
            <li>
              <strong>Category:</strong> {service.category}
            </li>
            <li>
              <strong>Pricing:</strong> {service.pricing}
            </li>
            <li>
              <strong>Duration:</strong> {service.duration}
              PM
            </li>
            <li>
              <strong>Counselor:</strong> {service.counselor}
            </li>
            <li>
              <strong>Rating:</strong> {service.rating}
            </li>
          </ul>
          <div className="flex items-center gap-2 my-8">
            <input
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Add your comment"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Comments/Feedback
          </h3>
          <div>
            {comments.length > 0 ? (
              <ul className="space-y-2">
                {comments.map((cmt, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 p-3 rounded-md text-gray-800 shadow-sm"
                  >
                    {cmt}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No comments yet. Be the first to add one!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;
