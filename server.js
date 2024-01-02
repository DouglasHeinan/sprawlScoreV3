const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const {logger} = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;
const root = require("./routes/root");

mongoose.connect("mongodb://127.0.0.1:27017/opolisdbs", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

const app = express()

// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.use(logger);

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", root);

app.all("*", (req, res) => {
    res.status(404);
    console.log(res)
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"))
    } else if (req.accepts("json")) {
        res.json({message: "404 Not Found"})
    } else {
        res.type("txt").send("404 Not Found")
    }
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("**********Server listening on port ", PORT, "**********");
})