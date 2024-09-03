import NewsCarousel from "../components/news-carousel";

const Section_1 = () => {
  return (
    <div className="min-h-screen py-20 hidden md:flexCol gap-0 md:gap-10">
      <div className="section-title px-4 z-10">
        <h1 className="">Berita Pendidikan Terkini</h1>
      </div>
      <NewsCarousel />
    </div>
  );
};

export default Section_1;
