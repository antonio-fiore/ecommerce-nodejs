const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    owner:{type: Schema.Types.String, required: true},
    review: {type: Schema.Types.String},
    star: {type: Schema.Types.Number, min: 0, max:5, validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }}
});

module.exports=ReviewSchema;