import React, { FC } from 'react';

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ id, checked, onChange }) => {
  return (
    <div>

    <label
      htmlFor={id}
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-100 transition [-webkit-tap-highlight-color:_transparent] peer-checked:bg-green-500"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <span
        className="absolute inset-y-0 left-0 z-0 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:left-6 peer-checked:text-green-600"
      >
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${checked ? 'hidden' : 'block'}`}
          viewBox="0 0 20 20"
          fill="#E57373"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${checked ? 'block' : 'hidden'}`}
          viewBox="0 0 20 20"
          fill="green"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </label>
    </div>
  );
};

export default Switch;