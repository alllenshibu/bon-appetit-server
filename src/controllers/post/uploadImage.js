const Post = require('../../models/Post')
const { uploadFile } = require('../../utils/s3');
const sharp = require('sharp')
//API /api/post/image

const uploadImage = async (req, res) => {
    try {
        const file = req.file
        const postId = req.params.id
        // Check if Postid is in Post Collection
        const myPost = await Post.findById(postId);
        if (!myPost) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }
        const imageName = req.file.originalname

        // Function to resize Images
        // const fileBuffer = await sharp(file.buffer)
        //     .resize({ height: 1920, width: 1080, fit: "contain" })
        //     .toBuffer()
        const fileBuffer = file.buffer;

        // console.log(imageName)
        await uploadFile(fileBuffer, imageName, file.mimetype)
        const post = await Post.findOneAndUpdate(
            { _id: postId },
            { imageUrl: imageName },
            { new: true }
        )
        res.status(201).json({
            message: 'Image uploaded successfully',
            post_details: post,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { uploadImage }
