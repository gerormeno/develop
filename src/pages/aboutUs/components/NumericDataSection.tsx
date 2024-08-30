

const stats = [
    { label: "Transactions every 24 hours", value: "44 million" },
    { label: "Assets under holding", value: "$119 trillion" },
    { label: "New users annually", value: "46,000" },
  ];

export default function NumericDataSection() {
  return (
    <div className="bg-white">

      {/* CTA Section */}
      <section className="relative bg-white" aria-labelledby="join-heading">
        <div
          className="absolute inset-x-0 hidden bg-slate-50 md:block"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl bg-blue-600 md:bg-transparent md:px-8">
          <div className="md:grid md:grid-cols-12">
            <div className="relative z-10 md:col-span-4 md:col-start-1 md:row-start-1 md:bg-transparent md:py-16">
              <div
                className="absolute inset-x-0 h-1/2 bg-slate-50 md:hidden"
                aria-hidden="true"/>
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl md:max-w-none md:p-0">
                <div className="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 md:aspect-w-1 h-full">
                  <img
                    className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-blue-600 md:col-span-10 md:col-start-3 md:row-start-1 md:grid md:grid-cols-10 md:items-center md:rounded-3xl">
              <div
                className="absolute inset-0 hidden overflow-hidden rounded-3xl md:block"
                aria-hidden="true"
              >
                <svg
                  className="xl:bottom-auto xl:top-0 xl:translate-y-0 absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="xl:-translate-y-1/2 absolute top-full -translate-x-1/3 -translate-y-1/3 transform"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 md:col-span-6 md:col-start-4 md:max-w-none md:p-0">
                <h2
                  className="text-3xl font-bold tracking-tight text-white"
                  id="join-heading"
                >
                  Join our team
                </h2>
                <div className="md:flex md:flex-auto md:justify-center">
                  <dl className="xl:w-80 w-64 space-y-8">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <a
                  className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-blue-700 shadow-md hover:bg-slate-50 sm:inline-block sm:w-auto"
                  href="#"
                >
                  Explore open positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
