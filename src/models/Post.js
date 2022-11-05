const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: { type: String, required: true },
    desc: String,
    numberOfServing: { type: Number, required: true },
    expiry: { type: Date, required: true },
    coordinates: {
        lat: Number,
        lng: Number,
    },
})

const Post = mongoose.model('post', PostSchema)
module.exports = Post

// userId
// title
// desc
// No of Servings
// Veg or Nonveg
// FoodExpiry
// Location GeolocationCoordinates
// Address
// City
// State
// Country Default india
// contact info
// photo link
// isAceppted
// isDeliveryBydonor
// isDeliveryByVolunteer
// isDeliveryConfimed
// createdAt
