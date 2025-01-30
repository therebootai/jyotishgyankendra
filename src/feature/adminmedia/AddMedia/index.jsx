"use client";

import { addMedia } from "@/actions/mediaactions";
import { useState } from "react";

export default function AddMedia() {
  const [mediaType, setMediaType] = useState("photo"); // State to track selected media type
  const [mediaTitle, setMediaTitle] = useState("");
  const [mediaImage, setMediaImage] = useState(null);
  const [mediaVideo, setMediaVideo] = useState("");
  const [mediaThumb, setMediaThumb] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await addMedia(
      mediaType,
      mediaTitle,
      mediaImage,
      mediaVideo,
      mediaThumb
    );
    if (result) {
      setMediaTitle("");
      setMediaImage(null);
      setMediaThumb(null);
      setMediaVideo("");
    }
    setLoading(false);
  };
  return (
    <form className="flex w-full flex-col gap-2 py-4" onSubmit={handleSubmit}>
      <label className="text-lg text-black font-medium">Media</label>
      <div className="w-full flex items-center gap-4">
        <select
          name="mediaType"
          id="mediaType"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)} // Update state on selection
          className="xl:w-[15%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
        >
          <option value="photo">Photo Gallery</option>
          <option value="video">Video Gallery</option>
        </select>
        <input
          type="text"
          placeholder="Enter Title"
          className="xl:w-[30%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
          value={mediaTitle}
          onChange={(e) => setMediaTitle(e.target.value)}
          required
        />
        {mediaType === "photo" ? (
          <input
            type="file"
            onChange={(e) => setMediaImage(e.target.files[0])}
            accept="image/*"
            className="xl:w-[40%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
          />
        ) : (
          <input
            type="url"
            placeholder="Enter YouTube Video Link"
            value={mediaVideo}
            onChange={(e) => setMediaVideo(e.target.value)}
            className="xl:w-[40%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
          />
        )}
        {mediaType === "video" && (
          <input
            type="file"
            onChange={(e) => setMediaThumb(e.target.files[0])}
            accept="image/*"
            className="xl:w-[40%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
          />
        )}
        <button
          type="submit"
          className="xl:w-[15%] lg:w-[25%] sm:w-[30%] h-[3.5rem] bg-site-main rounded-md shadow-custom text-lg text-site-main-blue font-medium flex justify-center items-center"
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
