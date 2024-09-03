const FeatureItems = ({ img, label }: { img: string; label: string }) => {
  return (
    <div className="flexCol flex-center gap-5 ">
      <img src={`assets/images/${img}`} className="w-1/2" />
      <h1 className="text-base md:text-2xl font-bold text-tertiary text-center">
        {label}
      </h1>
    </div>
  );
};

export default FeatureItems;
