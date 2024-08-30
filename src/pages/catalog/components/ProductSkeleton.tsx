const ProductSkeleton = () => {
  return (
    <div className="w-52 animate-pulse p-5 sm:w-80">
      <div className="h-56 w-40 rounded-2xl bg-gray-700 sm:h-96 sm:w-64"></div>
      <div className="mb-3 py-3">
        <div className="h-4 w-3/4 rounded bg-gray-700"></div>
        <div className="mt-2 flex items-center">
          <div className="h-4 w-1/4 rounded bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
