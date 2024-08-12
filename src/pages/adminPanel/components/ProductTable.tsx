import NotAvailableImg from "@/assets/adminPanel/picture-not-available.jpg";

interface ProductTableProps {
  products: Product[];
  editProduct: (product: Product) => void;
  createProduct: () => void;
}

const ProductTable = ({ products, editProduct, createProduct }: ProductTableProps) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"></th>
          <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Nombre
          </th>
          <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Estado
          </th>
          <th className="min-w-max border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Precio mín.
          </th>
          <th className="w-1 min-w-max border-b border-gray-200 bg-gray-50 px-4 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            <button
              onClick={createProduct}
              className="flex h-full w-16 items-center justify-center rounded border bg-accent px-2 py-2 text-xs text-white hover:bg-accent-hover"
            >
              NUEVO
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {products.map((product) => (
          <tr key={product.nombre}>
            <td className="w-8 min-w-max whitespace-nowrap border-b border-gray-200 px-2 py-2">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      product.fotos && product.fotos.length > 0
                        ? product.fotos[0]
                        : NotAvailableImg
                    }
                    alt=""
                  />
                </div>
              </div>
            </td>
            <td className="whitespace-no-wrap border-b border-gray-200 px-4 py-4">
              <div className="text-sm leading-5 text-gray-900">
                {product.nombre}
              </div>
              <div className="text-sm leading-5 text-gray-500">
                {product.categoria}
              </div>
            </td>
            <td className="whitespace-no-wrap min-w-max border-b border-gray-200 px-4 py-4">
              {product.activo ? (
                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                  Activo
                </span>
              ) : (
                <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                  Inactivo
                </span>
              )}
            </td>
            <td className="whitespace-no-wrap min-w-max border-b border-gray-200 px-4 py-4 text-sm leading-5 text-gray-500">
              $ {product.precio}
            </td>
            <td className="whitespace-no-wrap w-1 min-w-max border-b border-gray-200 px-4 py-4 text-right text-sm font-medium leading-5">
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    editProduct(product);
                  }}
                  className="flex items-center text-indigo-600 hover:text-indigo-900"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button className="flex items-center text-indigo-600 hover:text-indigo-900">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909"
                        stroke="#1C1C1C"
                        stroke-width="1.7"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6"
                        stroke="#1C1C1C"
                        stroke-width="1.7"
                        stroke-linecap="round"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;