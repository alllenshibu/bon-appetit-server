const Post = require('../../models/Post')

const deliverReq = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId).populate('userId');
        if (!post) {
            return res.status(400).json({ error: "No POST Found" })
        }

        if (post.isDelivery == false) {
            post.isDelivery = true;
            post.isDeliveredBy = req.user._id;
            //sent a post request to the user who has sent the request to api https://w2e9j471i2.execute-api.ap-south-1.amazonaws.com/dev/send-email
            const data = {
                toEmail: post.userId.email,
                subject: "Delivery initaited for Food Request",
                content: `The Food will be delivered By ${req.user.name}.`
            }
            const response = await axios.post('https://w2e9j471i2.execute-api.ap-south-1.amazonaws.com/dev/send-email', data);
            console.log(response.data);
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
