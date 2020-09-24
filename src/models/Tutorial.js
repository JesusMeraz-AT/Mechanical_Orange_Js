const { Schema, model } = require("mongoose");

const TutorialSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Tutorial", TutorialSchema);
