import { Link } from "react-router-dom";

interface NewsItemProps {
  img_url: string;
  title: string;
  datePublish: string;
  className?: string; // Additional className prop for Tailwind CSS styling
  id: string;
}

const NewsItem = ({
  img_url,
  title,
  datePublish,
  className = "", // Default value for className prop
  id,
}: NewsItemProps) => {
  return (
    <Link
      to={`/news/${id}`}
      className={`rounded-xl md:w-[400px] z-10 ${className}`}
    >
      <img
        src={img_url}
        alt=""
        className="object-fill rounded-xl md:w-[400px] md:h-52"
      />
      <div className="flexCol justify-between h-44 md:h-52 text-black p-4 text-wrap">
        <h1 className={`text-xl font-bold line-clamp-3 mdline-clamp-5`}>
          {title}
        </h1>
        <p className="">{datePublish}</p>
      </div>
    </Link>
  );
};

export default NewsItem;
