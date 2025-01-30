"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function addSlider(sliderName, sliderImage) {
  try {
    const formData = new FormData();
    formData.append("title", sliderName);
    formData.append("image", sliderImage);
    const response = await axios.post(
      `${process.env.API_URI}/api/sliders/`,
      formData
    );
    if (response.status === 200) {
      revalidatePath("/admin/slider");
    }
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function deleteSlider(sliderId) {
  try {
    const response = await axios.delete(
      `${process.env.API_URI}/api/sliders/${sliderId}`
    );
    if (response.status === 200) {
      revalidatePath("/admin/slider");
    }
  } catch (error) {
    console.error("Error deleting slider:", error);
    return error;
  }
}

export async function updateSlider(id, title, image, isActive) {
  try {
    const formData = new FormData();
    if (title !== null) {
      formData.append("title", title);
    }
    if (image !== null) {
      formData.append("image", image);
    }
    if (isActive !== null) {
      formData.append("isActive", isActive);
    }
    const response = await axios.put(
      `${process.env.API_URI}/api/sliders/${id}`,
      formData
    );
    if (response.status === 200) {
      revalidatePath("/admin/slider");
    }
  } catch (error) {
    console.error("Error updating slider:", error);
    return error;
  }
}

export async function getSliders(page = 1) {
  try {
    const response = await axios.get(
      `${process.env.API_URI}/api/sliders?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error Getting slider:", error);
    return error;
  }
}
