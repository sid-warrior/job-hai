import { TrendingUp } from "lucide-react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex flex-col items-start gap-4 mb-10">
        <div className="flex items-center gap-2 text-[#6A38C2]">
        </div>
        <h1 className="text-4xl font-bold">
          <span className="text-[#4E992E]">What type of job do you want? </span>
        </h1>
        <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E992E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
          <span className="text-green-700 font-medium">Do work from home</span>
        </div>

        <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E992E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
          <span className="text-green-700 font-medium">Full Time</span>
        </div>

        <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E992E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
          <span className="text-green-700 font-medium">Part time</span>
        </div>

        <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-1 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E992E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
          <span className="text-green-700 font-medium">Remote</span>
        </div>


       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {allJobs.length <= 0 ? (
          <span></span>
        ) : (
          allJobs.slice(0, 6).map((job, index) => (
            <div
              key={job._id}
              className="transform hover:scale-[1.02] transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fade-in-up 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              <LatestJobCards job={job} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
