import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";

// GET: Fetch all blogs or one by ID
export async function GET(request) {
  try {
    await connectDB();

    const blogId = request.nextUrl.searchParams.get("id");

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json({ blog });
    }

    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}

// POST: Create a new blog with image upload
export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();

    const blogData = {
      title: formData.get("title") || "",
      description: formData.get("description") || "",
      category: formData.get("category") || "",
      author: formData.get("author") || "",
      image: "/1751908762095_blog_pic_15.png", 
      authorImg: formData.get("authorImg") || "",
      date: new Date(),
    };

    await BlogModel.create(blogData);

    return NextResponse.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}


// DELETE: Delete blog by ID and its image
export async function DELETE(request) {
  try {
    await connectDB();

    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ msg: "Missing blog ID" }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
    }

    // Delete image if it exists
    if (blog.image) {
      const filePath = `./public${blog.image}`;
      fs.unlink(filePath, (err) => {
        if (err) console.error("Failed to delete image:", err);
        else console.log("Deleted image:", filePath);
      });
    }

    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Blog deleted successfully" });
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
