const User = require('../../models/User')

const createProfile = async (req, res) => {
    try {
        const { phoneNumber, coordinates, name, city } = req.body;
        const user = await User.findOneAndUpdate({ _id: req.user._id }, { phoneNumber, coordinates, name, city }, { new: true });
        res.status(201).json({
            message: 'Profile Created',
            user: user,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createProfile }
