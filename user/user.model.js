const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email :{type: Schema.Types.String, required: true, unique:true, index:true},
    password: {type: Schema.Types.String, required: true},
    name : {type: Schema.Types.String},
    surname: {type: Schema.Types.String},
});

module.exports= mongoose.model("User", UserSchema);