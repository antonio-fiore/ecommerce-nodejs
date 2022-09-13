const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewModel = require('./reviews/review.model');

const ProductSchema = new Schema({
    name: {type: Schema.Types.String, required:true},
    description :{type : Schema.Types.String},
    images:[{type: Schema.Types.String}] ,
    quantity : {type: Schema.Types.Number},
    price: {type: Schema.Types.Number},
    reviews:[ReviewModel]
});

module.exports = mongoose.model('Product', ProductSchema);
