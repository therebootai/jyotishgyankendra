import { connectToDataBase } from "@/db/connection";
import Slider from "@/models/Slider";
import { uploadFile } from "@/utils/cloudinary";
import { generateCustomId } from "@/utils/generateCustomId";
import parseImage from "@/utils/parseImage";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDataBase();
    const url = new URL(req.url);
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");
    const isActive = url.searchParams.get("isActive");
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);

    const query = {};

    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) {
        query.createdAt.$gte = new Date(startDate);
      }
      if (endDate) {
        query.createdAt.$lte = new Date(endDate);
      }
    }

    if (isActive) {
      query.isActive = isActive;
    }

    const skip = (page - 1) * limit;

    const sliders = await Slider.find(query).skip(skip).limit(limit).exec();

    const totalSliders = await Slider.countDocuments(query);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalSliders / limit);

    return NextResponse.json(
      {
        sliders,
        pagination: {
          currentPage: page,
          totalPages,
          totalSliders,
          pageSize: limit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDataBase();
    const body = await req.formData();

    const title = body.get("title");
    const image = body.get("image");

    if (!title || !image) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const sliderId = await generateCustomId(Slider, "sliderId", "sliderId");

    const fileUri = await parseImage(image);
    const uploadData = await uploadFile(fileUri);

    const data = new Slider({
      sliderId,
      title,
      image: {
        path: uploadData.url,
        publicId: uploadData.public_id,
      },
    });

    const savedSlider = await data.save();

    return NextResponse.json({ ...savedSlider }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}
