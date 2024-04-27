import { Link } from "react-router-dom";

const FooterItem = ({ label, items }: { label: string; items: string[] }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-bold">{label}</h1>
      <ul className="flex flex-col gap-5 text-lg text-gray-300">
        {items.map((item, index) => (
          <Link to="" key={index} className="hover:text-white">
            {item}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
