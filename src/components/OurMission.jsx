import missionImage from "../assets/Mission.png";

const OurMission = () => {
  return (
    <div className="mt-8 p-4 ">
      <h3 className="text-2xl text-center font-bold mb-6">
        Our Mission
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center">
          <img
            src={missionImage}
            alt="Career Counseling"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <div>
          <h2 className="text-xl mb-2">
            Empowering Individuals to Achieve Career Success
          </h2>
          <p className="text-gray-600 mb-4">
            We provide expert career counseling services that help individuals
            identify their strengths, set clear career goals, and navigate the
            professional landscape.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Career path exploration and goal setting</li>
            <li>Resume building and interview preparation</li>
            <li>Job market trends and industry insights</li>
            <li>Work-life balance strategies</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
              <h4 className="text-orange-500 font-bold text-lg mb-2">
                Our Mission
              </h4>
              <p className="text-gray-600 mb-4">
                Our mission is to help individuals find their true calling and
                achieve career success through personalized guidance and
                actionable strategies.
              </p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
              <h4 className="text-orange-500 font-bold text-lg mb-2">
                Our Approach
              </h4>
              <p className="text-gray-600 mb-4">
                We take a holistic approach to career counseling, focusing on
                understanding your unique skills, values, and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
