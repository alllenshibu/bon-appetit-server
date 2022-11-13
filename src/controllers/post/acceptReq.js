const Post = require('../../models/Post')
const axios = require('axios');
const User = require('../../models/User');


const acceptReq = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId).populate('userId');
        console.log(post)
        if (!post) {
            return res.status(400).json({ error: "No POST Found" })
        }

        if (post.isAccepted == false) {
            post.isAccepted = true;
            post.isAcceptedBy = req.user._id;

            //sent a post request to the user who has sent the request to api https://w2e9j471i2.execute-api.ap-south-1.amazonaws.com/dev/send-email
            const data = {
                toEmail: post.userId.email,
                subject: "Food Donation Request Accepted",
                content: `The Food Request has been accepted by ${req.user.name}.`
            }
            const response = await axios.post(process.env.EMAIL, data);
            console.log(response.data);

            await post.save();
        } else if (post.isAccepted == true) {
            console.log(req.user)
            post.isAccepted = false;
            post.isAcceptedBy = null;
            await post.save();
        }

        res.status(201).json({
            message: "Post Accepted Successfully",
            data: post
        })
    } catch (err) {
        return res
            .status(500).json({ error: 'Something went wrong', message: err.message })
    }
}

module.exports = { acceptReq }
