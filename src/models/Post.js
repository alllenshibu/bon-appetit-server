const mongoose = require('mongoose')
const User = require('./User')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
    title: { type: String, required: true },
    desc: String,
    createdOn: { type: Date, required: true },
    numberOfServing: { type: Number, required: true },
    expiry: { type: Date, required: true },
    isNonVeg: { type: Boolean, required: true },
    userName: String,
    coordinates: {
        lat: Number,
        lng: Number,
    },
    address: String,
    city: String,
    state: String,
    imageUrl:{
        type: String,
        default:''
    },
    country: {
        type: String,
        default: 'India',
    },
    contactInfo: String,
    isAccepted: {
        type: Boolean,
        default: false,
    },
    isDelivery: {
        type: Boolean,
        default: false,
    },
    isDeliveryConfirmed: {
        type: Boolean,
        default: false,
    },
})

const Post = mongoose.model('post', PostSchema)
module.exports = Post

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
