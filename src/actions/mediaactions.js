"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function addMedia(
  mediaType,
  mediaTitle,
  mediaImage,
  mediaVideo,
  mediaThumb
) {
  try {
    const formData = new FormData();
    formData.append("mediaType", mediaType);
    formData.append("mediaTitle", mediaTitle);
    if (mediaImage !== null) {
      formData.append("mediaImage", mediaImage);
    }
    if (mediaVideo !== "") {
      formData.append("mediaVideo", mediaVideo);
    }
    if (mediaThumb !== null) {
      formData.append("mediaVideoThumb", mediaThumb);
    }

    const response = await axios.post(
      `${process.env.API_URI}/api/media/`,
      formData
    );
    if (response.status === 200) {
      revalidatePath("/admin/media");
      revalidatePath("/photo-gallery");
      revalidatePath("/video-gallery");
    }
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getMedia(page = 1) {
  try {
    const response = await fetch(
      `${process.env.API_URI}/api/media?page=${page}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function deleteMedia(mediaId) {
  try {
    const response = await axios.delete(
      `${process.env.API_URI}/api/media/${mediaId}`
    );
    if (response.status === 200) {
      revalidatePath("/admin/media");
      revalidatePath("/photo-gallery");
      revalidatePath("/video-gallery");
    }
  } catch (error) {
    console.error("Error deleting media:", error);
    return error;
  }
}

export async function updateMedia(mediaId, medianame, mediaImage, mediaVideo) {
  try {
    const formData = new FormData();
    if (medianame !== null) {
      formData.append("mediaTitle", medianame);
    }
    if (mediaImage !== null) {
      formData.append("mediaImage", mediaImage);
    }
    if (mediaVideo) {
      formData.append("mediaVideo", mediaVideo);
    }
    const response = await axios.put(
      `${process.env.API_URI}/api/media/${mediaId}`,
      formData
    );
    if (response.status === 200) {
      revalidatePath("/admin/media");
      revalidatePath("/photo-gallery");
      revalidatePath("/video-gallery");
    }
  } catch (error) {
    console.error("Error updating media:", error);
    return error;
  }
}
