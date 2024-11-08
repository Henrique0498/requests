import { ComponentProps } from "react";

type InButton = ComponentProps<"button">;

export default function Button({ className = "", ...props }: InButton) {
  return (
    <button
      {...props}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center ${className}`}
    />
  );
}
