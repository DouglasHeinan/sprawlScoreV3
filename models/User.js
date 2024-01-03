const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);

models.exports = mongoose.model("User", userSchema)