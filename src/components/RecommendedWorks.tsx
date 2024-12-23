import {useState, useEffect} from "react"
import cardImg from "../assets/img-2.jpg";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecommendedWorks = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="relative">
      <h3 className="text-xl font-semibold">Opere consigliate</h3>
      <p className="text-sm opacity-50 mt-2">
        in base ai tuoi generi preferiti
      </p>
      <div className="mt-8 max-w-5xl">
        <Carousel setApi={setCarouselApi}>
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/5 xl:basis-1/6"
              >
                <Link
                  to={"#"}
                  className="block relative w-35 h-50 rounded-md overflow-hidden"
                >
                  <img
                    className="size-full absolute object-cover z-0"
                    src={cardImg}
                    alt=""
                  />
                  <p className="absolute left-2.5 top-2.5 text-white text-[4px]">
                    John Doe
                  </p>
                  <p className="text-white font-inspiration text-2xl absolute left-2.5 bottom-2.5 z-10">
                    Hand <br />
                    with <br />
                    hot-air baloons
                  </p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">

            <button
                onClick={() => scrollToIndex(currentIndex - 1)}
                className="absolute -left-12 top-1/2 -translate-y-1/2"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                <g opacity="0.5">
                  <path d="M20 24L12 16L20 8" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>

            </button>
            <button
                onClick={() => scrollToIndex(currentIndex + 1)}
                className="absolute -right-12 top-1/2 -translate-y-1/2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                  <g opacity="0.5">
                    <path d="M12 24L20 16L12 8" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
            </button>
          </div>
        </Carousel>
      </div>

    </div>
  );
};

export default RecommendedWorks;
