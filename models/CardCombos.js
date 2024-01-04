const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardComboSchema = new Schema({
    cards: [
        { 
            type: Schema.Types.ObjectId,  
            ref: "ScoreCard"
        }
    ],
    targetScore: {
        type: Number,
        required: true,
        min: 6
    }
});

module.exports = mongoose.model("CardCombo", cardComboSchema);