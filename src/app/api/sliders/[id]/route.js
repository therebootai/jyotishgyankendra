import { connectToDataBase } from "@/db/connection";
import Slider from "@/models/Slider";
import { deleteFile } from "@/utils/cloudinary";
import parseImage from "@/utils/parseImage";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectToDataBase();
    const id = (await params).id;
    const slider = await Slider.findOne({
      $or: [
        { sliderId: id },
        { _id: mongoose.Types.ObjectId.isValid(id) ? id : undefined },
      ],
    });
    if (!slider) {
      return NextResponse.json({ message: "No slider found" }, { status: 401 });
    }
    return NextResponse.json({ ...slider }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDataBase();
    const id = (await params).id;
    const slider = await Slider.findOne({
      $or: [
        { sliderId: id },
        { _id: mongoose.Types.ObjectId.isValid(id) ? id : undefined },
      ],
    });
    if (!slider) {
      return NextResponse.json(
        { message: "Slider not found" },
        { status: 404 }
      );
    }
    await deleteFile(slider.image.publicId);
    await Slider.findByIdAndDelete(slider._id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectToDataBase();
    const id = (await params).id;
    const body = await req.formData();

    const title = body.get("title");
    const image = body.get("image");
    const isActive = body.get("isActive");

    const slider = await Slider.findOne({
      $or: [
        { sliderId: id },
        { _id: mongoose.Types.ObjectId.isValid(id) ? id : undefined },
      ],
    });

    if (!slider) {
      return NextResponse.json(
        { message: "Slider not found" },
        { status: 404 }
      );
    }
    let uploadData;

    if (image) {
      await deleteFile(slider.image.publicId);
      const fileUri = await parseImage(image);
      uploadData = await uploadFile(fileUri);
    }
    slider.title = title ?? slider.title;
    slider.isActive = isActive ?? slider.isActive;
    slider.image = uploadData
      ? { path: uploadData.url, publicId: uploadData.public_id }
      : slider.image;

    await slider.save();

    return NextResponse.json({ ...slider }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}
