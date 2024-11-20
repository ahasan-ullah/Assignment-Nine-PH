import choose from "../assets/choose.webp";
const WhyChooseUs = () => {
  return (
    <div className="my-8">
      <h3 className="text-2xl text-center font-bold"> Why Choose Us for Career Counselling </h3>
      <div className="bg-white flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-orange-500 text-lg font-semibold mb-2">
            Empowering you to achieve your dreams.
          </h2>
          <p className="text-gray-600 mb-6">
            We provide personalized career guidance to help you unlock your true
            potential and make informed decisions about your future.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-xl">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">
                  Certified Career Experts
                </h4>
                <p className="text-gray-600">
                  Our experts are highly qualified to guide you through every
                  step of your career journey.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-xl">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">
                  Complete Confidentiality
                </h4>
                <p className="text-gray-600">
                  We ensure that your personal and career details are kept
                  private and secure.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-500 text-xl">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">
                  24/7 Guidance Support
                </h4>
                <p className="text-gray-600">
                  Get access to round-the-clock support for any questions or
                  concerns about your career path.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
          <img src={choose} alt="Career Counselling" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
