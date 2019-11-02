const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName : {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    spentBy: {
        type: String,
        required: true
    },
    dateOfPurchase: {
        type: Date,
        default: Date.now()
    }
});