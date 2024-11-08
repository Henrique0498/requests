import { Icon } from "@iconify/react";
import Link from "next/link";

export default function WhatsApp() {
  const link = process.env.NEXT_PUBLIC_LINK_TO_WHATSAPP!;

  return (
    <Link
      href={link}
      title="Ir para o WhatsApp"
      className="flex absolute right-4 bottom-8 bg-emerald-500 p-4 rounded-2xl"
      target="_blank"
    >
      <Icon icon="ic:baseline-whatsapp" className="text-white w-10 h-10 " />
    </Link>
  );
}
