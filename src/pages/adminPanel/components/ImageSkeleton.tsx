const ImageSkeleton = () => {
  return (
    <div className="mt-0 flex w-full flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 animate-pulse">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="relative h-48 w-48 transform overflow-hidden rounded-lg shadow-lg">
          <div className="h-full w-full bg-gray-200"></div>
        </div>
        <div className="relative h-48 w-48 transform overflow-hidden rounded-lg shadow-lg">
          <div className="h-full w-full bg-gray-200"></div>
        </div>
        <div className="relative h-48 w-48 transform overflow-hidden rounded-lg shadow-lg">
          <div className="h-full w-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSkeleton;