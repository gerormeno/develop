type Props = {
    name: string;
    image: string;
    description: string;
    };

export const TestimonialSection =  ({ name, image, description }: Props) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-2 px-5 pb-20 sm:pb-0">
      <div className="mb-4 text-center">
        <div className="mb-2 flex justify-center">
          {/* Five stars */}
          {Array(5)
            .fill(null)
            .map((_, i) => (
            <svg
                key={i}
                className="h-6 w-6 text-white"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l2.042 6.627L21 9.386l-5 4.772L17.958 21 12 17.27 6.042 21l1.958-6.842L3 9.386l6.958-.759L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-lg text-white font-thin tracking-tight ">
          {description}
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <img
          className="mb-2 h-12 w-12 rounded-full"
          src={image}
          alt={name}
        />
        <p className="text-white ">{name}</p>
      </div>
    </div>
  );
};
