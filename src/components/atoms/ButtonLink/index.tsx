import Link from "next/link";
import { ComponentProps, ComponentType } from "react";

interface InButtonLink extends ComponentProps<"a"> {
  href: string;
}

export default function ButtonLink(props: InButtonLink) {
  return (
    <Link
      {...props}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
    />
  );
}
