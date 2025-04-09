import { NextResponse } from "next/server";

const products = [
  { title: "iPHone", price: 999, category: "Phones", userRating: 4.8 },
  {
    title: "Samsung galaxy s23",
    price: 999,
    category: "Phones",
    userRating: 4.8,
  },
  { title: "realme ipad", price: 999, category: "Ipad", userRating: 4.8 },
  { title: "mac book", price: 999, category: "Laptops", userRating: 4.8 },
  {
    title: "Lenevo think pag",
    price: 999,
    category: "laptops",
    userRating: 4.8,
  },
  { title: "Realme p1", price: 999, category: "Phones", userRating: 4.8 },
];

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const price = searchParams.get("price");

  // console.log("Search Params: ", query,price);

  const searchProduct = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.price == price
  );

  return NextResponse.json({ 
    message: "query params",
    success: true,
    searchProduct
 });
}
