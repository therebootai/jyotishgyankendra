import mongoose, { Schema } from "mongoose";

const sliderSchema = new Schema(
  {
    sliderId: { type: String, required: true, unique: true },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
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

const Slider = mongoose.models.Slider || mongoose.model("Slider", sliderSchema);

export default Slider;
