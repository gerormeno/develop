const ProductSkeleton = () => {
  return (
    <div className="mx-5 w-60 animate-pulse">
      <div className="h-80 w-50 rounded bg-gray-200"></div>
      <div className="mb-3 py-3">
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <div className="mt-2 flex items-center">
          <div className="h-4 w-1/4 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
    );
}

export default ProductSkeleton;