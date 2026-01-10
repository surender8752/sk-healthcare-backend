import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "https://res.cloudinary.com/demo/image/upload/v1/sample_avatar" },
    phone: { type: String, default: "" },
    address: {
        type: Object,
        default: { line1: "", line2: "" }
    },
    gender: { type: String, default: "Not Selected" },
    dob: { type: String, default: "Not Selected" }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
