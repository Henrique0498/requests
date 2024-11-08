import { NextRequest, NextResponse } from "next/server";
import { ProductsApiService } from "./service";
import { validateToken } from "@/services/validateToken";

export async function GET() {
  const database = new ProductsApiService();

  try {
    const products = await database.findAll();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao acessar os produtos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  if (!validateToken(req)) {
    return NextResponse.json(
      { error: "Chave de autorização inválida" },
      { status: 403 }
    );
  }

  try {
    const { name, price } = await req.json();

    if (!name || !price) {
      return NextResponse.json(
        { error: "Nome e preço são obrigatórios" },
        { status: 400 }
      );
    }

    const database = new ProductsApiService();
    const product = await database.create({ name, price });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar o produto" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  if (!validateToken(req)) {
    return NextResponse.json(
      { error: "Chave de autorização inválida" },
      { status: 403 }
    );
  }

  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID do produto é obrigatório" },
      { status: 400 }
    );
  }

  const database = new ProductsApiService();
  try {
    await database.delete(id);
    return NextResponse.json("", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar o produto" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  if (!validateToken(req)) {
    return NextResponse.json(
      { error: "Chave de autorização inválida" },
      { status: 403 }
    );
  }

  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID do produto é obrigatório" },
      { status: 400 }
    );
  }

  try {
    const { name, price } = await req.json();

    if (!name && price === undefined) {
      return NextResponse.json(
        { error: "Nome ou preço são obrigatórios" },
        { status: 400 }
      );
    }

    const database = new ProductsApiService();
    const updatedProduct = await database.update(id, { name, price });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar o produto" },
      { status: 500 }
    );
  }
}
