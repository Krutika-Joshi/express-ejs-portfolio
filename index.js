const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

const data = require("./data.json");

app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("Hello I am Home page.");
    res.render("home.ejs", {intro: data.home.intro, interests: data.home.interests});
});

app.get("/education", (req, res) => {
    // res.send("Hello I am Education page.");
    res.render("education.ejs", {education: data.education});
});

app.get("/projects", (req, res) => {
    // res.send("Hello I am Projects page.");
    res.render("projects.ejs", {projects: data.projects});
});

app.get("/contact", (req, res) => {
    // res.send("Hello I am Contact page.");
    res.render("contact.ejs", {contact: data.contact});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
