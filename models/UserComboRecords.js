const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userRecordSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    cardCombo: 
    { 
        type: Schema.Types.ObjectId,  
        ref: "CardCombo"
    },
    gamesPlayed: [
        {
            type: Schema.Types.ObjectId, 
            ref: "GameResult"
        }
    ],
    wins: {
        type: Number,
        required: true,
        min: 0,
    },
    losses: {
        type: Number,
        required: true,
        min: 0,
    },
    avgScore: {
        type: Number,
        required: true,
        min: 0
    },
    highScore: {
        type: Number,
        required: true,
        min: 0
    },
    lowScore: {
        type: Number,
        min: 0
    }
}) 

module.exports = mongoose.model("UserRecord", userRecordSchema);
