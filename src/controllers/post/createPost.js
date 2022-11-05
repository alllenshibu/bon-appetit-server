const Post = require('../../models/Post')

const createPost = async (req, res) => {
    const { title, desc, numberOfServing, expiry, coordinates } = req.body

    console.log({ title, desc, numberOfServing, expiry, coordinates })
    try {
        const user = await Post.create({
            title,
            desc,
            numberOfServing,
            expiry,
            coordinates,
        })

        res.status(201).json({
            title,
            desc,
            numberOfServing,
            expiry,
            coordinates,
        })
    } catch (err) {
        return res
            .status(500)
            .json({ error: 'Something went wrong', message: err.message })
    }
}

module.exports = { createPost }
