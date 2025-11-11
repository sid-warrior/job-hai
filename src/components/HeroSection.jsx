import { useState } from 'react';
import { Button } from './ui/button';
import { Search, Briefcase, Star, TrendingUp } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = () =>{
  dispatch(setSearchedQuery(query));
  navigate('/browse')

 }

  return (
    <div className="relative text-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-40 left-70 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        <img src="" alt="" />
      </div>

      <div className="flex flex-col gap-6 items-center max-w-6xl mx-auto px-4">
        {/* Badge */}
        <span className="inline-flex animate-fade-in-down items-center px-6 py-2.5 rounded-full bg-green-50 text-[#4E992E] text-lg font-semibold shadow-sm border border-green-100">
          A Naukri Group company
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-6xl font-bold tracking-tight animate-fade-in-up">
          Job Hai<br />
          {' '}
          <span className="text-[#6A38C2] relative">
            
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.8c54-4 98.5-4.3 137.3-3.5 39 .8 78.6 2.7 118.4 3.7 39.7 1 79.6 1.2 98.3 1.2" stroke="#6A38C2" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 max-w-2xl animate-fade-in-up animation-delay-150">
         Explore the Jobs over the India.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mt-4 animate-fade-in-up animation-delay-300">
          <div className="flex shadow-lg border border-gray-200 bg-white rounded-full items-center gap-4 pl-6 transition-all duration-300 hover:shadow-xl">
            <Briefcase className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              onChange={(e)=> setQuery(e.target.value)}
              placeholder="Find local jobs with better salary!"
              className="outline-none px-4 py-4 w-full border-none text-lg placeholder:text-gray-400"
            />
            <Button onClick={searchJobHandler} className="bg-[#4E992E] hover:bg-[#5b30a6] rounded-r-full h-14 px-8 transition-all duration-300">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-8 animate-fade-in-up animation-delay-450">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#6A38C2]" />
            <span className="text-lg">
              <strong className="font-bold">10k+</strong> Jobs Posted
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#F83002]" />
            <span className="text-lg">
              <strong className="font-bold">8k+</strong> Companies
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-[#6A38C2]" />
            <span className="text-lg">
              <strong className="font-bold">15k+</strong> Candidates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;