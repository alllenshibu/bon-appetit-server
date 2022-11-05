const User = require('../../models/User')

const createProfile = async (req, res) => {
    try {
        const { phoneNumber, name, city, state } = req.body;
        const file = req.file.location;
        // console.log("file", file)
        const user = await User.findOneAndUpdate(
            { _id: req.user._id },
            { phoneNumber, name, city, state, imageUrl: file },
            { new: true }
        )
        res.status(201).json({
            message: 'Profile Created',
            user: user,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createProfile }
