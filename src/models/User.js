import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

// Create a Schema based on the UserDocument interface
const userSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save middleware to hash the password if it's modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err instanceof Error ? err : new Error("Unknown error occurred"));
    // No need for `as Error` as TypeScript knows the type of the error.
  }
});

// Instance method to check if the entered password matches
userSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

// Create the User model using the UserDocument interface
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
