const Post = require('../../models/Post')

const createPost = async (req, res) => {
    const {
        userId,
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
        photoLink,
    } = req.body

    const createdOn = new Date().toUTCString({ timeZone: 'Asia/Tokyo' })
    console.log({
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
        photoLink,
    })
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
            photoLink,
        })

        res.status(201).json({
            userId,
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
            photoLink,
            m,
        })
    } catch (err) {
        return res
            .status(500)
            .json({ error: 'Something went wrong', message: err.message })
    }
}

module.exports = { createPost }
