import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectDB();  

    const formData = await request.formData();
    const emailData = {
        email: formData.get("email"),
    };

    try {
        await EmailModel.create(emailData);
        return NextResponse.json({ success: true, msg: "Email Subscribed" });
    } catch (err) {
        return NextResponse.json({ success: false, msg: "Failed to subscribe", error: err.message });
    }
}

export async function GET() {
    await connectDB(); 

    try {
        const email = await EmailModel.find().sort({ date: -1 });
        return NextResponse.json({ success: true, email });
    } catch (err) {
        return NextResponse.json({ success: false, msg: "Failed to fetch emails", error: err.message });
    }
}

export async function DELETE(request) {
    await connectDB(); 

    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
        return NextResponse.json({ success: false, msg: "No ID provided" });
    }

    try {
        await EmailModel.findByIdAndDelete(id);
        return NextResponse.json({ success: true, msg: "Email Removed" });
    } catch (err) {
        return NextResponse.json({ success: false, msg: "Failed to delete", error: err.message });
    }
}
