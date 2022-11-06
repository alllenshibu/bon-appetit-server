const Post = require('../../models/Post');

const getPost = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId');
        if (!posts) {
            return res.status(400).json({ error: "No POST Found" })
        }
        res.status(200).json({
            message: "All Posts Fetched Successfully",
            data: posts
        })
    } catch (err) {
        return res
            .status(500).json({ error: 'Something went wrong', message: err.message })
    }
}
   
module.exports = { getPost }
