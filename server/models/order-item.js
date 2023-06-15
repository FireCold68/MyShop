const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
});

exports.OrderItem = mongoose.model("OrderItem", orderItemSchema);