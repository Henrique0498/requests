import { ComponentProps, ComponentType } from "react";

interface InInput extends ComponentProps<"input"> {
  label: string;
  id: string;
}

export default function Input({ label, id, ...props }: InInput) {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}
