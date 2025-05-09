const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    shopId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Shop",
        required : true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    location : {
        type: String,
        required: true,
        trim: true,
    },
    capacity : {
        type: Number,
        required: true,
    }
});

const Warehouse = mongoose.model("Warehouse", warehouseSchema);
module.exports = Warehouse;