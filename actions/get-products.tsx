import { Product } from "@/types";
import fs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProduct = async (query: Query): Promise<Product[]> => {
  const url = fs.stringify({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    },
  });
  const res = await fetch(URL);

  return res.json();
};

export default getProduct;
