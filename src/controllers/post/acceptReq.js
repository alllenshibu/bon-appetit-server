const Post = require('../../models/Post')

const acceptReq = async (req, res) => {
    try {
        const postId=req.params.id;
        const post=await Post.findById(postId);
        if(!post){
            return res.status(400).json({error:"No POST Found"})
        }

        if(post.isAccepted==false){
            post.isAccepted=true;
            post.isAcceptedBy=req.user._id;
            await post.save();
        }else if (post.isAccepted==true){
            post.isAccepted=false;
            post.isAcceptedBy=null;
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
