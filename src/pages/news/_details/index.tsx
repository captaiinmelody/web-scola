import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { news } from "@/constants/news";
import { useParams } from "react-router-dom";
import NewsList from "../components/news-list";

// interface News {
//   id: string;
//   title: string;
//   description: string;
//   thumbnailUrl: string;
//   isTrending: boolean;
// }

const NewsDetails: React.FC = () => {
  //   const allNews = useLoaderData() as News[]; // Type assertion
  const { id } = useParams<{ id: string }>();

  const selectedNews = news.find((news) => news.id === id);

  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="flexCol gap-10 py-10 px-4 md:px-52">
          <Breadcrumb>
            <BreadcrumbList className="text-xs md:text-base">
              <BreadcrumbItem>
                <BreadcrumbLink to="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink to="/news">News</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-wrap">
                  {selectedNews?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {selectedNews ? (
            <div className="flexCol gap-10">
              <div className="flexCol gap-2 md:gap-5 text-center">
                <h1 className="text-xl md:text-3xl leading-relaxed section-title">
                  {selectedNews.title}
                </h1>
                <h3 className="text-base font-semibold md:text-xl leading-relaxed">
                  {selectedNews.source}
                </h3>
                <p className="text-xs font-semibold md:text-lg text-gray-800">
                  {selectedNews.datePublish}
                </p>
              </div>
              <div className="flexCol gap-2 md:gap-4">
                <img
                  src={selectedNews.thumbnailUrl}
                  alt={selectedNews.title}
                  className="object-contain w-full rounded-lg"
                />
                <p className="text-xs md:text-lg text-gray-600 text-start h-full">
                  Foto: {selectedNews.thumbnailDescription}
                </p>
              </div>
              <p className="whitespace-pre-line text-xs md:text-lg">
                <span className="font-bold">{selectedNews.source_url}</span> -{" "}
                {selectedNews.description}
              </p>
            </div>
          ) : (
            <p>No news found with the ID or title: {id}</p>
          )}
          <div className="flexCol gap-5">
            <h2 className="text-base md:text-2xl font-bold text-secondary text-start border-b-8 border-secondary rounded-b-xl">
              Berita lainnya...
            </h2>
            <NewsList
              news={news}
              className="md:grid-cols-2"
              selectedNewsId={selectedNews?.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;

// export const newsDetailsLoader = async () => {
//   const res = await fetch(`http://localhost:4000/news`);
//   return res.json();
// };
