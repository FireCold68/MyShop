const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    orderItem: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OrderItem",
            required: true,
        },
    ],
    shippingAddress1: {
        type: String,
        required: true
    },
    shippingAddress2: {
        type:String
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Pemding"
    },
    totalPrice: { 
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    dateOrdered: {
        type: Date,
        default: Date.now
    }
});

orderSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

orderSchema.set("toJSOM", {
    virtuals: true
});