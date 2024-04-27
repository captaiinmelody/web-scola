import { Link } from "react-router-dom";

const UnderConstructionPage = () => {
  return (
    <div className="text-white font-serif flex flex-col gap-20 bg-initial-page initial-background">
      <div className="flexCol items-center justify-center h-screen p-4 gap-10">
        <h1 className="text-2xl text-center md:text-5xl text-secondary font-bold">
          Page is under construction
        </h1>
        <Link
          to="/"
          className="text-base md:text-2xl text-center font-medium text-secondary border-b-4 border-secondary"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
