import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  MenuItem,
  Popover,
  Transition,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { invertSort, setFilters, setSort } from "@/store/filters";

const sortOptions = [{ name: "A - Z" }, { name: "Precio" }];
const filters = [
  {
    id: "categoria",
    name: "Categoría",
    options: [
      { value: "Lámparas", label: "Lámparas", checked: false },
      { value: "Ventiladores", label: "Ventiladores", checked: false },
      { value: "Humidificadores", label: "Humidificadores", checked: false },
      { value: "Poleas", label: "Poleas", checked: false },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Filters {
  filters: string[];
}

interface FiltersState {
  filters: {
    activeFilters: string[];
    activeSort: string | null;
    sortType: string;
  };
}

export default function Filters() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const activeFilters = useSelector(
    (state: FiltersState) => state.filters.activeFilters
  );
  const activeSort = useSelector(
    (state: FiltersState) => state.filters.activeSort
  );
  const sortType = useSelector((state: FiltersState) => state.filters.sortType);

  const setActiveFilters = (filters: string[]) => {
    dispatch(setFilters(filters));
  };

  const setActiveSort = (sort: string) => {
    dispatch(setSort(sort));
  };

  const handleFilterChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    if (activeFilters.includes(value)) {
      setActiveFilters(activeFilters.filter((filter: any) => filter !== value));
    } else {
      setActiveFilters([...activeFilters, value]);
    }
  };

  function countActiveFilters(filterName: string): number {
    for (let filter of filters) {
      if (filter.name === filterName) {
        let count = 0;
        for (let option of filter.options) {
          if (activeFilters.includes(option.value)) {
            count++;
          }
        }
        return count;
      }
    }
    return 0;
  }

  const handleClearFilter = (filter: string) => {
    setActiveFilters(
      activeFilters.filter((activeFilter: string) => activeFilter !== filter)
    );
  };

  return (
    <div className="py-5">
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="bg-white flex w-full items-center justify-between px-2 py-3 text-sm text-gray-400">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={activeFilters.includes(
                                      option.value
                                    )}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onChange={handleFilterChange}
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Filters */}
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filtros
        </h2>

        <div className="border-b border-gray-600 pb-4">
          <div className="lg:px-8 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-filters-text-primary hover:text-filters-text-primary-hover">
                  Orden
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-filters-text-primary group-hover:text-filters-text-primary-hover"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          onClick={() =>
                            option.name === activeSort
                              ? dispatch(invertSort())
                              : setActiveSort(option.name)
                          }
                          className={classNames(
                            option.name === activeSort ? "bg-gray-100" : "",
                            "block w-full"
                          )}
                        >
                          <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-900">
                            <p>{option.name}</p>
                            {option.name === activeSort && (
                              <span className="text-filters-text-black">
                                {sortType === "asc" ? "↑" : "↓"}
                              </span>
                            )}
                          </div>
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="inline-block text-sm font-medium text-white hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filtros
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  {filters.map((section) => (
                    <Popover
                      key={section.name}
                      className="relative inline-block px-4 text-left"
                    >
                      <Popover.Button
                        className="group inline-flex justify-center text-sm font-medium 
                      text-filters-text-primary hover:text-filters-text-primary-hover"
                      >
                        <span>{section.name}</span>
                        {countActiveFilters(section.name) !== 0 ? (
                          <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                            {countActiveFilters(section.name)}
                          </span>
                        ) : null}
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-filters-text-primary group-hover:text-filters-text-primary-hover"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={activeFilters.includes(
                                    option.value
                                  )}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={handleFilterChange}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        { activeFilters.length > 0 &&
          <div className="">
          <div className="lg:px-8 mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6">
            <h3 className="text-sm font-medium text-filters-text-primary">
              Filtros
              <span className="sr-only">, active</span>
            </h3>

            <div
              aria-hidden="true"
              className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
            />

            <div className="mt-2 sm:ml-4 sm:mt-0">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.map((activeFilter: string) => (
                  <span
                    key={activeFilter}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 py-1.5 pl-3 pr-2 text-sm font-medium text-gray-300 backdrop-filter"
                  >
                    <span>{activeFilter}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-300 hover:bg-gray-200 hover:text-gray-500"
                      onClick={() => handleClearFilter(activeFilter)}
                    >
                      <span className="sr-only">
                        Remove filter for {activeFilter}
                      </span>
                      <svg
                        className="h-2 w-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>}
      </section>
    </div>
  );
}
