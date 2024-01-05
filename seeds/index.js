const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require("mongoose");
const ScoreCard = require("../models/ScoringCards");
const CardCombo = require("../models/CardCombos");
const cards = require("./sprawlopolisCards");

const connectDB = require("../config/dbConn");

connectDB();

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("db connected");
})

const updateCardDb = async () => {
    await ScoreCard.deleteMany({});
    length = cards["scoringCards"].length
    allCards =[];
    for (let i = 0; i < length; i++) {
        const card = cards["scoringCards"][i];
        const newCard = new ScoreCard({
            name: card["name"],
            description: card["description"],
            colOneMulti: card["colOneMulti"],
            colOneName: card["colOneName"],
            colTwoMulti: card["colTwoMulti"],
            colTwoName: card["colTwoName"],
            cardTargetScore: card["target"],
            minScore: card["min-score"],
            maxScore: card["max-score"],
            startingTotal: card["startingTotal"],
            mostPoints: 0,
            fewestPoints: 0,
            gamesPlayed: [],
            wins: 0,
            losses: 0
        });
        allCards.push(newCard);
        await newCard.save();
    };
    return allCards;
};


const createCombos = async () => {
    const allCards = await updateCardDb();
    let allCombos = [];
    const length = allCards.length
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                const combo = [allCards[i], allCards[j], allCards[k]]
                allCombos.push(combo);
            };
        };
    };
    return allCombos;
};

const saveCombos = async () => {
    await CardCombo.deleteMany({});
    const allCombos = await createCombos();
    for (let combo of allCombos) {
        const comboTargetScore = combo[0].cardTargetScore + combo[1].cardTargetScore + combo[2].cardTargetScore
        const newCombo = new CardCombo({
            cards: combo,
            wins: 0,
            losses: 0,
            targetScore: comboTargetScore,
            avgScore: 0,
            highScore: 0,
            lowScore: 0
        });
        await newCombo.save();
    };
};

makeThings = async () => {
    await saveCombos()
};

makeThings();
