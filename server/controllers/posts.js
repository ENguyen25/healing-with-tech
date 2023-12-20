import PostMessage from "../models/postMessages.js";

export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.findById(req.params.id);
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find().sort({createdAt: -1});
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const newPost = new PostMessage({
        title: req.body.title,
        summary: req.body.summary,
        content: req.body.content,
        image: req.body.image
      });

    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
