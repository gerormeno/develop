import NotAvailableImg from "@/assets/adminPanel/picture-not-available.jpg";
import { Product } from "@/types/product.type";

interface ProductTableProps {
  products: Product[];
  editProduct: (product: Product) => void;
  createProduct: () => void;
}

const ProductTable = ({
  products,
  editProduct,
  createProduct,
}: ProductTableProps) => {
  return (
    <div className="border border-gray-200 align-middle shadow sm:rounded-lg">
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
            <th className="w-1 border-b border-gray-200 bg-gray-50 px-6 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
              <button
                className="flex h-full w-16 items-center justify-center rounded border px-2 py-2 text-xs text-white"
                onClick={createProduct}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                      fill="#1C274C"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                      fill="#1C274C"
                    ></path>
                  </g>
                </svg>
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
                $ {product.precio.toLocaleString("es-ES")}
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.7566 2.62145C16.5852 0.792851 19.55 0.792851 21.3786 2.62145C23.2072 4.45005 23.2072 7.41479 21.3786 9.24339L11.8933 18.7287C11.3514 19.2706 11.0323 19.5897 10.6774 19.8665C10.2592 20.1927 9.80655 20.4725 9.32766 20.7007C8.92136 20.8943 8.49334 21.037 7.76623 21.2793L4.43511 22.3897L3.63303 22.6571C2.98247 22.8739 2.26522 22.7046 1.78032 22.2197C1.29542 21.7348 1.1261 21.0175 1.34296 20.367L2.72068 16.2338C2.96303 15.5067 3.10568 15.0787 3.29932 14.6724C3.52755 14.1935 3.80727 13.7409 4.13354 13.3226C4.41035 12.9677 4.72939 12.6487 5.27137 12.1067L14.7566 2.62145ZM4.40051 20.8201L7.24203 19.8729C8.03314 19.6092 8.36927 19.4958 8.68233 19.3466C9.06287 19.1653 9.42252 18.943 9.75492 18.6837C10.0284 18.4704 10.2801 18.2205 10.8698 17.6308L18.4393 10.0614C17.6506 9.78321 16.6346 9.26763 15.6835 8.31651C14.7324 7.36538 14.2168 6.34939 13.9387 5.56075L6.36917 13.1302C5.77951 13.7199 5.52959 13.9716 5.3163 14.2451C5.05704 14.5775 4.83476 14.9371 4.65341 15.3177C4.50421 15.6307 4.3908 15.9669 4.12709 16.758L3.17992 19.5995L4.40051 20.8201ZM15.1554 4.34404C15.1896 4.519 15.2474 4.75684 15.3438 5.03487C15.561 5.66083 15.9712 6.48288 16.7442 7.25585C17.5171 8.02881 18.3392 8.43903 18.9651 8.6562C19.2432 8.75266 19.481 8.81046 19.656 8.84466L20.3179 8.18272C21.5607 6.93991 21.5607 4.92492 20.3179 3.68211C19.0751 2.4393 17.0601 2.4393 15.8173 3.68211L15.1554 4.34404Z"
                          fill="#1C274C"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.11686 7.7517C5.53016 7.72415 5.88754 8.03685 5.91509 8.45015L6.37503 15.3493C6.46489 16.6971 6.52892 17.6349 6.66948 18.3406C6.80583 19.025 6.99617 19.3873 7.26958 19.6431C7.54299 19.8989 7.91715 20.0647 8.60915 20.1552C9.32255 20.2485 10.2626 20.25 11.6134 20.25H12.3868C13.7376 20.25 14.6776 20.2485 15.391 20.1552C16.083 20.0647 16.4572 19.8989 16.7306 19.6431C17.004 19.3873 17.1943 19.025 17.3307 18.3406C17.4713 17.6349 17.5353 16.6971 17.6251 15.3493L18.0851 8.45015C18.1126 8.03685 18.47 7.72415 18.8833 7.7517C19.2966 7.77925 19.6093 8.13663 19.5818 8.54993L19.1183 15.5017C19.0328 16.7844 18.9638 17.8206 18.8018 18.6336C18.6334 19.4789 18.347 20.185 17.7554 20.7385C17.1638 21.2919 16.4402 21.5308 15.5856 21.6425C14.7635 21.7501 13.7251 21.7501 12.4395 21.75H11.5607C10.2751 21.7501 9.23664 21.7501 8.4146 21.6425C7.55995 21.5308 6.8364 21.2919 6.2448 20.7385C5.65321 20.185 5.36679 19.4789 5.19839 18.6336C5.03642 17.8205 4.96736 16.7844 4.88186 15.5017L4.41841 8.54993C4.39086 8.13663 4.70357 7.77925 5.11686 7.7517Z"
                          fill="#1C274C"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.3553 2.25004L10.3094 2.25002C10.093 2.24988 9.90445 2.24976 9.72643 2.27819C9.02313 2.39049 8.41453 2.82915 8.08559 3.46084C8.00232 3.62074 7.94282 3.79964 7.87452 4.00496L7.86 4.04858L7.76291 4.33984C7.74392 4.39681 7.73863 4.41251 7.73402 4.42524C7.55891 4.90936 7.10488 5.23659 6.59023 5.24964C6.5767 5.24998 6.56013 5.25004 6.50008 5.25004H3.5C3.08579 5.25004 2.75 5.58582 2.75 6.00004C2.75 6.41425 3.08579 6.75004 3.5 6.75004L6.50865 6.75004L6.52539 6.75004H17.4748L17.4915 6.75004L20.5001 6.75004C20.9143 6.75004 21.2501 6.41425 21.2501 6.00004C21.2501 5.58582 20.9143 5.25004 20.5001 5.25004H17.5001C17.44 5.25004 17.4235 5.24998 17.4099 5.24964C16.8953 5.23659 16.4413 4.90933 16.2661 4.42522C16.2616 4.41258 16.2562 4.39653 16.2373 4.33984L16.1402 4.04858L16.1256 4.00494C16.0573 3.79961 15.9978 3.62073 15.9146 3.46084C15.5856 2.82915 14.977 2.39049 14.2737 2.27819C14.0957 2.24976 13.9072 2.24988 13.6908 2.25002L13.6448 2.25004H10.3553ZM9.14458 4.93548C9.10531 5.04404 9.05966 5.14902 9.00815 5.25004H14.992C14.9405 5.14902 14.8949 5.04405 14.8556 4.9355L14.8169 4.82216L14.7171 4.52292C14.626 4.2494 14.605 4.19363 14.5842 4.15364C14.4745 3.94307 14.2716 3.79686 14.0372 3.75942C13.9927 3.75231 13.9331 3.75004 13.6448 3.75004H10.3553C10.067 3.75004 10.0075 3.75231 9.96296 3.75942C9.72853 3.79686 9.52566 3.94307 9.41601 4.15364C9.39519 4.19363 9.37419 4.24942 9.28302 4.52292L9.18322 4.82234C9.1682 4.86742 9.1565 4.90251 9.14458 4.93548Z"
                          fill="#1C274C"
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
    </div>
  );
};

export default ProductTable;
