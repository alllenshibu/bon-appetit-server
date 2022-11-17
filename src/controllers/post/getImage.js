const Post = require('../../models/Post');
const { getObjectSignedUrl } = require('../../utils/s3');

//API /api/post/image

const getImage = async (req, res) => {
    try {
        const posts = await Post.find({ imageUrl: { $ne: ''} });
        const imageUrl = posts.map((post) => {
            const url = getObjectSignedUrl(post.imageUrl);
            return url;
        })
        const imageUrls = await Promise.all(imageUrl)
        // console.log(imageUrls)

        res.status(201).json({
            message: 'Image Shown successfully',
            imageUrls: imageUrls,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getImage }
