const ProductItem = (product: any) => {
  return (
    <div className="bg-red-700 w-full md:w-1/3 min-h-64 rounded-xl relative text-white">
      <div className="absolute top-0 flex-center bg-red-600 rounded-xl w-full h-1/5">
        <h1 className="w-3/4 text-xl text-center font-semibold">
          {product.title}
        </h1>
      </div>
      <p className="px-4 pt-20 pb-4">{product.overall_concept}</p>
    </div>
  );
};

export default ProductItem;
