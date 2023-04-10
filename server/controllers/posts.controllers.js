import Post from '../models/Post.js';
import { uploadImage, deleteImage } from '../libs/cloudinary.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.header("Access-Control-Allow-Origin", "*");
        res.send(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;
        let image;

        res.header("Access-Control-Allow-Origin", "*");

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);

            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        const newPost = new Post({ title, description, image });

        await newPost.save();

        return res.json(newPost);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export const updatingPost = async (req, res) => {

    try {

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.send(updatedPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


};

export const deletePost = async (req, res) => {
    try {
        const postRemove = await Post.findByIdAndDelete(req.params.id);

        console.log(postRemove);

        if (!postRemove) {

            return res.sendStatus(404);
        }

        if (postRemove.image.public_id) {
            await deleteImage(postRemove.image.public_id);
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const gettingPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.sendStatus(404);
        }

        return res.json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};