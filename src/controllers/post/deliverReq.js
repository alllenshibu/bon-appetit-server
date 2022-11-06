const Post = require('../../models/Post')

const deliverReq = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ error: "No POST Found" })
        }

        if (post.isDelivery == false) {
            post.isDelivery = true;
            post.isDeliveredBy = req.user._id;
            await post.save();
        } else if (post.isDelivery == true) {
            post.isDelivery = false;
            post.isDeliveredBy = null;
            await post.save();
        }

        res.status(201).json({
            message: "Delivery Req is Successfully Sent",
            data: post
        })
    } catch (err) {
        return res
            .status(500).json({ error: 'Something went wrong', message: err.message })
    }
}

module.exports = { deliverReq }
