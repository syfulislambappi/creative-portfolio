import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connect();
    const { slug } = params;
    const post = await Post.findById(slug);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(slug);

    return new NextResponse("Post has been deleted", { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
};
