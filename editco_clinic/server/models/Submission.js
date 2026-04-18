import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  service: { type: String, required: true },
  date: { type: String },
  time: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Submission = mongoose.model("Submission", submissionSchema);
