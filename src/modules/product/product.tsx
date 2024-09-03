const Product = () => {
  return (
    <div className="w-full min-h-screen py-14 flex flex-col justify-center items-center lg:flex-row lg:flex-center lg:gap-32 bg-product-page bg-center lg:bg-left bg-cover bg-no-repeat bg-fixed ">
      {/* <div className="w-full flex-between flex-row wrapper px-4">
        <div className="w-1/2 hidden lg:flex"></div>
        <div className="lg:w-1/2 pl-10 flex flex-col gap-16">
          {products.map((product) => (
            <div className="flex-center gap-4 ">
              <img src={product.logo} alt="" className="w-[127px] h-[127px] " />
              <p className="text-xl ">{product.overall_concept}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Product;
