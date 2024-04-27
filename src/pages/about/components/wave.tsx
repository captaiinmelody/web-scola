const Wave = () => {
  return (
    <div className="absolute z-1 inset-0">
      <img src="/assets/icons/top-wave.svg" className="w-1/2 md:w-1/3" />
      <div className="w-full flex-end absolute bottom-0">
        <img
          src="/assets/icons/bottom-wave.svg"
          className="w-1/2 md:w-1/3 flex-end"
        />
      </div>
    </div>
  );
};

export default Wave;
