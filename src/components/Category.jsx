import { setSearchedQuery } from "@/redux/jobSlice";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Briefcase } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const categories = [
    "Delhi",
    "Mumbai",
    "Bangloru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Gurgoan",
    "Noida",
    "pune",
];

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchJobHandler = (query) =>{
    dispatch(setSearchedQuery(query));
    navigate('/browse')
   }
  return (
    <div className="py-10 px-4">
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Explore jobs in 400+ cities</h2>
      </div>

      <Carousel 
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((item, index) => (
            <CarouselItem 
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Button onClick={()=>searchJobHandler(item)} 
                variant="outline" 
                className="w-18 rounded-full h-10 border-1 hover:border-[#4E992E] hover:text-[#4E992E] transition-all duration-300 group"
              >
               
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 border-2 hover:bg-[#4E992E] hover:text-white transition-all duration-300" />
        <CarouselNext className="hidden md:flex -right-12 border-2 hover:bg-[#4E992E] hover:text-white transition-all duration-300" />
      </Carousel>

      <div className="mt-8 text-center">
        <span className="text-sm text-gray-500">
          Swipe or use arrows to explore more categories
        </span>
      </div>
    </div>
  );
};

export default Category;