import ButtonLink from "@/components/atoms/ButtonLink";
import Table from "@/components/organism/Table";
import { getProducts } from "@/services/api/actions/products";

const columns = [
  {
    id: "name",
    label: "Nome",
    allowsSorting: true,
  },
  {
    id: "price",
    label: "Preço (kg)",
  },
  {
    id: "updated",
    label: "Ultima atualização",
  },
];

export default async function Products() {
  const { data: rows = [] } = await getProducts();

  return (
    <main className="container mx-auto flex-1 flex flex-col gap-4 py-4">
      <section className="flex justify-start ">
        <ButtonLink href="/">Voltar</ButtonLink>
      </section>
      <section className="flex-1">
        <Table
          columns={columns}
          rows={rows}
          aria-label="Tabela de produtos"
          isStriped
        />
      </section>
    </main>
  );
}
