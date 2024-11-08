import { api } from "../..";
import { TyResponseGetProduct } from "./types";

export async function getProducts() {
  return api.get<TyResponseGetProduct[]>("api//products");
}
