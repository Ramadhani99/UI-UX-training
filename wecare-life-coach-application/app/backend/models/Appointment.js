const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    coachId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coacheeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    slot: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "reject", "reschedule"],
      default: "pending",
    },
  },
  {
    collection: "appointments",
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
