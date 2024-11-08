"use client";
import Button from "@/components/atoms/Button";
import ButtonLink from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import { handleFormSubmitProduct } from "@/services/forms/actions/request";
import { useActionState, useEffect } from "react";

export default function Request() {
  const [_, action] = useActionState(handleFormSubmitProduct, "");

  return (
    <main className="container mx-auto flex-1 flex gap-4 flex-col py-4">
      <section className="flex justify-start ">
        <ButtonLink href="/">Voltar</ButtonLink>
      </section>

      <section className="flex-1">
        <form
          action={action}
          className="bg-white shadow-md rounded px-8 pt-6 gap-4 flex flex-col pb-8 mb-4"
        >
          <Input
            label="Endereço"
            id="formAddress"
            name="formAddress"
            required
          />
          <Input label="Contato" id="formContact" name="formContact" required />
          <Button className="mt-4">Solicitar</Button>
        </form>
      </section>
    </main>
  );
}
