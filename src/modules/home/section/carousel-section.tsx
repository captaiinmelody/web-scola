import CarouselComponent from "../components/carousel/carousel-component";

const HeroSection = () => {
  return (
    <div className="h-full w-full">
      <div className="h-screen w-full relative">
        <div className="w-full">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
