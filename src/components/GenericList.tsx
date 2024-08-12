import React from 'react';

interface ProductFeaturesListProps {
    // Propiedades del componente
}

const GenericList: React.FC<ProductFeaturesListProps> = () => {
    // Lógica del componente

    return (
      <section>
        <div className="lg:-mx-8 lg:px-8 -my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6">
          <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Name
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Title
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                    Role
                  </th>
                  <th className="border-b border-gray-200 bg-gray-50 px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>
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
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                    <div className="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      Web dev
                    </div>
                  </td>
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                    Owner
                  </td>
                  <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
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

export default GenericList;