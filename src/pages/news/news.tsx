import Section_1 from "./section/section_1";
import Section_2 from "./section/section_2";

export const News = () => {
  return (
    <div className="bg-white relative font-sans">
      <img
        src="/assets/images/top-wave-news.png"
        className="absolute top-0 w-full z-0"
      />
      <Section_1 />
      <Section_2 />
    </div>
  );
};
