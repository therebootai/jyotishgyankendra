import { connectToDataBase } from "@/db/connection";
import Media from "@/models/Media";
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
    const mediaType = url.searchParams.get("mediaType");
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

    if (mediaType) {
      query.mediaType = mediaType;
    }

    const skip = (page - 1) * limit;

    const medias = await Media.find(query).skip(skip).limit(limit).exec();

    const totalMedias = await Media.countDocuments(query);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalMedias / limit);

    return NextResponse.json({
      medias,
      pagination: {
        currentPage: page,
        totalPages,
        totalMedias,
        pageSize: limit,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDataBase();
    const body = await req.formData();
    const mediaTitle = body.get("mediaTitle");
    const mediaType = body.get("mediaType");
    const mediaVideo = body.get("mediaVideo");
    const mediaImage = body.get("mediaImage");
    const mediaVideoThumb = body.get("mediaVideoThumb");

    if (!mediaTitle || !mediaType) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    let uploadData = null;
    if (mediaImage) {
      const fileUri = await parseImage(mediaImage);
      uploadData = await uploadFile(fileUri);
    }

    let uploadThumbData = null;
    if (mediaVideoThumb) {
      const fileUri = await parseImage(mediaVideoThumb);
      uploadThumbData = await uploadFile(fileUri); // Upload to Cloudinary
    }

    const mediaId = await generateCustomId(Media, "mediaId", "mediaId");

    const data = new Media({
      mediaId,
      mediaTitle,
      mediaImage: uploadData
        ? {
            path: uploadData.url,
            publicId: uploadData.public_id,
          }
        : null,
      mediaVideo,
      mediaType,
      mediaVideoThumb: uploadThumbData
        ? {
            path: uploadThumbData.url,
            publicId: uploadThumbData.public_id,
          }
        : null,
    });

    const savedMedia = await data.save();

    return NextResponse.json({ savedMedia }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}
