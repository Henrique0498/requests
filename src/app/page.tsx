import ButtonLink from "@/components/atoms/ButtonLink";
import WhatsApp from "@/components/atoms/WhatsApp";
import { ComponentProps } from "react";

type InHome = ComponentProps<"main">;

export default function Home() {
  return (
    <main className="container mx-auto flex-1 flex justify-center items-center">
      <section className="flex gap-4 flex-col">
        <ButtonLink href="/produtos">Consultar preços</ButtonLink>
        <ButtonLink href="/solicitar">Solicitar</ButtonLink>

        <WhatsApp />
      </section>
    </main>
  );
}
