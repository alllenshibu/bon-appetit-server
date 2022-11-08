const User = require('../../models/User')

const createProfile = async (req, res) => {
    try {
        const { phoneNumber, name, city, state } = req.body;

        const file = req.file;
        const orginalLink = process.env.BASEURL + "images/" + file.originalname;
        const user = await User.findOneAndUpdate(
            { _id: req.user._id },
            { phoneNumber, name, city, state, imageUrl: orginalLink },
            { new: true }
        )
        res.status(200).json({
            message: "Profile Created",
            data: user
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createProfile }
