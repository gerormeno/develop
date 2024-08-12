const ProductListSkeleton = () => {
  return (
    <div className="lg:px-8 mb-16 flex animate-pulse justify-center py-2 sm:px-6">
      <div className="w-full overflow-x-auto md:w-3/5">
        <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
          <div className="mb-4 mt-8 h-12 w-3/4 rounded bg-gray-200 pl-4"></div>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                </th>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                </th>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                </th>
                <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                </th>
                <th className="w-1 min-w-max border-b border-gray-200 bg-gray-50 px-4">
                  <div className="flex h-full w-16 items-center justify-center rounded border bg-accent px-2 py-2 text-xs text-white hover:bg-accent-hover">
                    <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="mb-2 h-10 rounded bg-gray-200"></td>
                <td className="mb-2 h-10 rounded bg-gray-200"></td>
                <td className="mb-2 h-10 rounded bg-gray-200"></td>
                <td className="mb-2 h-10 rounded bg-gray-200"></td>
                <td className="mb-2 h-10 rounded bg-gray-200"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductListSkeleton;
