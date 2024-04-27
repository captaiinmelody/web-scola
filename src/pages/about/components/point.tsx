const Point = ({
  color,
  point,
  description,
}: {
  color: string;
  point: string;
  description: string;
}) => {
  return (
    <div className="w-full flexCol gap-5">
      <div className={`border-b-2 border-black w-full flex flex-start gap-5`}>
        <div className={`w-5 h-5 rounded-full my-4 border-2 ${color}`}></div>
        <p className="text-4xl pb-1">{point}</p>
      </div>
      <div className="w-full text-base md:text-2xl">{description}</div>
    </div>
  );
};

export default Point;
