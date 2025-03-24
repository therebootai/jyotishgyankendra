import { connectToDataBase } from "@/db/connection";
import Media from "@/models/Media";
import { deleteFile } from "@/utils/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const id = (await params).id;
    await connectToDataBase();
    const media = await Media.findOne({
      $or: [
        { mediaId: id },
        { _id: mongoose.Types.ObjectId.isValid(id) ? id : undefined },
      ],
    });

    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    return NextResponse.json({ ...media }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = (await params).id;
    await connectToDataBase();
    const media = await Media.findOne({
      $or: [
        { mediaId: id },
        { _id: mongoose.Types.ObjectId.isValid(id) ? id : undefined },
      ],
    });

    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    if (media.mediaImage?.publicId) {
      await deleteFile(media.mediaImage.publicId);
    }

    if (media.mediaVideoThumb?.publicId) {
      await deleteFile(media.mediaVideoThumb.publicId);
    }

    await Media.findByIdAndDelete(media._id);
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

    const mediaTitle = body.get("mediaTitle");
    const mediaImage = body.get("mediaImage");
    const isActive = body.get("isActive");
    const mediaVideo = body.get("mediaVideo");
    const mediaVideoThumb = body.get("mediaVideoThumb");

    const media = await Media.findOne({
      $or: [
        { mediaId: id },
        { _id: mongoose.Types.ObjectId.isValid(id) ? id : undefined },
      ],
    });

    if (!media) {
      return NextResponse.json({ message: "Media not found" }, { status: 404 });
    }
    let uploadData;

    if (mediaImage) {
      await deleteFile(media.mediaImage.publicId);
      const fileUri = await parseImage(mediaImage);
      uploadData = await uploadFile(fileUri);
    }

    let uploadThumbData;

    if (mediaVideoThumb) {
      await deleteFile(media.mediaVideoThumb.publicId);
      const fileUri = await parseImage(mediaVideoThumb);
      uploadThumbData = await uploadFile(fileUri);
    }

    media.isActive = isActive || media.isActive;
    media.mediaTitle = mediaTitle || media.mediaTitle;
    media.mediaVideo = mediaVideo || media.mediaVideo;
    media.mediaImage = uploadData
      ? {
          path: uploadData.url,
          publicId: uploadData.public_id,
        }
      : media.mediaImage;
    media.mediaVideoThumb = uploadThumbData
      ? {
          path: uploadThumbData.url,
          publicId: uploadThumbData.public_id,
        }
      : media.mediaVideoThumb;

    await media.save();

    return NextResponse.json({ ...media }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An Error Occured" }, { status: 500 });
  }
}
