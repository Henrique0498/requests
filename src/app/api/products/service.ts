import { prisma } from "@/lib/prisma";
import { TyResponseGetProduct } from "@/services/api/actions/products/types";

export class ProductsApiService {
  private formattedProducts(product: TyResponseGetProduct) {
    return {
      ...product,
      updated: new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(product.updated)),
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price)),
    };
  }

  public async findAll() {
    const products = await prisma.products.findMany({
      orderBy: {
        name: "desc",
      },
    });

    return products.map(this.formattedProducts);
  }

  async create(data: { name: string; price: string }) {
    const product = await prisma.products.create({
      data,
    });

    return product;
  }

  async delete(id: string) {
    return await prisma.products.delete({
      where: { id: String(id) },
    });
  }

  async update(id: string, data: { name?: string; price?: string }) {
    const products = await prisma.products.update({
      where: { id: String(id) },
      data,
    });

    return this.formattedProducts(products);
  }
}
