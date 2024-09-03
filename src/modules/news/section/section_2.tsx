import { news } from "@/constants/news";
import NewsList from "../components/news-list";

const Section_2 = () => {
  return (
    <div className="min-h-screen z-10 p-4 w-full">
      <div className="w-full wrapper flexCol gap-5">
        <h2 className="text-base md:text-2xl font-bold text-secondary text-start border-b-8 border-secondary rounded-b-xl z-10">
          Berita pendidikan
        </h2>
        <NewsList news={news} className="md:grid-cols-3" />
      </div>
    </div>
  );
};

export default Section_2;
