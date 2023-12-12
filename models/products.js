const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  Ratings: {
    type: Number,
    required: true,
  },

  color: {
    type: String,
    required:true
  },
  category: {
    type: String,
    required: true
  },

}, {
    timestamps: true,
    collection: 'shoes'
});

module.exports = mongoose.model('Product', ProductSchema)