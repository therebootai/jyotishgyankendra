import mongoose, { Schema } from "mongoose";

const mediaSchema = new Schema(
  {
    mediaId: {
      type: String,
      required: true,
      unique: true,
    },
    mediaTitle: {
      type: String,
      required: true,
    },
    mediaImage: {
      type: Object,
    },
    mediaVideo: {
      type: String,
    },
    mediaVideoThumb: {
      type: Object,
    },
    mediaType: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const Media = mongoose.models.Media || mongoose.model("Media", mediaSchema);

export default Media;