import { NextResponse } from "next/server";
import { title } from "process";

const products = [
    { id: 1, title: "iphone 15 pro", price: 999, category: "Phones", userRating: 4.8 },
    { id: 2, title: "Samsung galaxy s23", price: 999, category: "Phones", userRating: 4.8 },
    { id: 3, title: "realme ipad", price: 999, category: "Ipad", userRating: 4.8 },
    { id: 4, title: "mac book", price: 999, category: "Laptops", userRating: 4.8 },
    { id: 5, title: "Lenevo think pag", price: 999, category: "laptops", userRating: 4.8 },
    { id: 6, title: "Realme p1", price: 999, category: "Phones", userRating: 4.8 },
]
//  fetching all the products
export async function GET(req) {
    return NextResponse.json({
        message: "Fetch all the products",
        success: true,
        products
    })
}

export async function POST(req) {
    const data = await req.json();

    products.push(data);
    return NextResponse.json({
        message: "New Product has been added",
        success: true,
        bodyData: data
    })
}

export async function PUT(req) {

    const searchParams = req.json();
    
}