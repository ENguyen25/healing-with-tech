import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  }
});

const User = mongoose.model("User", postSchema);

export default User;
