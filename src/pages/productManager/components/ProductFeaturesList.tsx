import React from 'react';

interface ProductFeaturesListProps {
    // Propiedades del componente
}

const ProductFeaturesList: React.FC<ProductFeaturesListProps> = () => {
    // Lógica del componente

    return (
      <section>
        <div className="lg:-mx-8 lg:px-8 -my-2 w-full overflow-x-auto py-2 sm:-mx-6 sm:px-6">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Características
          </label>
          <div className="mt-2 inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 text-left text-sm">
                    Total: 16
                  </th>
                  <th className="w-1 border-b border-gray-200 bg-gray-50 px-6 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    <button className="flex h-full w-16 items-center justify-center rounded border bg-blue-500 px-2 py-2 text-xs text-white hover:bg-blue-600">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-gray-900">
                          John Doe
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap w-1 border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
                    <div className="flex justify-between">
                      <button className="flex items-center text-indigo-600 hover:text-indigo-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>
                      </button>
                      <button className="flex items-center text-indigo-600 hover:text-indigo-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Repeat the above <tr> block for each row */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
};

export default ProductFeaturesList;