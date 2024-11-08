"use service";

export async function handleFormSubmitProduct(_: string, formData: FormData) {
  const address = formData.get("formAddress") as string | null;
  const contact = formData.get("formContact") as string | null;
  const link = process.env.NEXT_PUBLIC_LINK_TO_WHATSAPP!;

  if (address && contact) {
    const result = `${link}?text=${address}-${contact}`;

    if (typeof window !== "undefined") {
      window.open(result, "_blank");
    }
  }

  return "";
}
