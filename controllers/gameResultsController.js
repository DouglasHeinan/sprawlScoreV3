const CardCombo = require("./models/cardCombos");
const GameResults = require("../models/GameResults");
const asyncHandler = require("express-async-handler");

// @desc Get all game results
// @route GET /gameResults
// @access Private
const getAllGameResults = asyncHandler(async (req, res) => {

    // const users = await User.find().select("-password").lean()
    // if (!users.length) {
    //     return res.status(400).json({ message: "No users found" });
    // }
    // res.json(users);
});


// @desc Create new game result
// @route POST /gameResults
// @access Private
const createNewGameResult = asyncHandler(async (req, res) => {
    // const { username, password, email } = req.body;

    // // Data confirmation
    // if (!username || !password || !email) {
    //     return res.status(400).json({ message: "All fields are required" });
    // };

    // // Check for duplicates; 409 for conflict
    // const duplicate = await User.findOne({ username }).lean().exec();
    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate username" });
    // };

    // // Hash password
    // const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    // const userObject = { username, "password": hashedPwd, email };

    // // Create & store user
    // const user = await User.create(userObject);
    // if (user) {
    //     res.status(201).json({ message: `New user ${username} created.` });
    // } else {
    //     res.status(400).json({ message: "Invalid user data received." })
    // }
});


// @desc Update game result
// @route PATCH /gameResults
// @access Private
const updateGameResult = asyncHandler(async (req, res) => {
    // const { id, username, password, email} = req.body;
    // // Confirm data
    // if (!id || !username || !email) {
    //     return res.status(400).json({ message: "All fields are required" });
    // };

    // const user = await User.findById(id).exec();

    // if (!user) {
    //     return res.status(400).json({ message: "User not found" });
    // };

    // // Check for duplicate
    // const duplicate = await User.findOne({ username }).lean().exec();
    // // Allow updates to original user
    // if (duplicate && duplicate?._id.toString() !== id) {
    //     return res.status(409).json({ message: "Duplicate username" });
    // };

    // user.username = username;
    // user.email = email;

    // if (password) {
    //     // Hash password
    //     user.password = await bcrypt.hash(password, 10) // salt rounds
    // };

    // const updatedUser = await user.save();

    // res.json({ meassage: `Updated ${updatedUser.username}` })
});


// @desc delete game result
// @route DELETE /gameResults
// @access Private
const deleteGameResult = asyncHandler(async (req, res) => {
    // const { id } = req.body;
    // if (!id) {
    //     res.status(400).json({ message: "User ID required" });
    // };

    // const user = await User.findByIdAndDelete(id).exec();

    // if (!user) {
    //     return res.status(400).json({ message:"User not found" });
    // };
    
    // // *****NEED TO DELETE GAME RESULTS AS WELL*****

    // const reply = `Username ${user.username} with ID ${user._id} deleted.`
    
    // res.json(reply);
});


module.exports = {
    getAllGameResults,
    createNewGameResult,
    updateGameResult,
    deleteGameResult
};
