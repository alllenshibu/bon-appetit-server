const Post = require('../../models/Post')

const createPost = async (req, res) => {
    const {
        title,
        desc,
        numberOfServing,
        expiry,
        isNonVeg,
        username,
        coordinates,
        address,
        city,
        state,
        contactInfo,
    } = req.body
 
    const file = req.file;
    // const orginalLink = process.env.BASEURL + "images/" + file.originalname;
    const createdOn = new Date().toUTCString({ timeZone: 'Asia/Tokyo' })

    try {
        const user = await Post.create({
            userId: req.user._id,
            title,
            desc,
            createdOn,
            numberOfServing,
            expiry,
            isNonVeg,
            username,
            coordinates,
            address,
            city,
            state,
            contactInfo, 
            // imageUrl: orginalLink
        })

        res.status(201).json({
            message: "Post Created Successfully",
            data: user
        })
    } catch (err) {
        return res
            .status(500).json({ error: 'Something went wrong', message: err.message })
    }
}

module.exports = { createPost }
