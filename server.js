const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const Employee = require("./model/user");
let app = express();

mongoose.connect("mongodb://localhost/LoginForm");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Employee.authenticate()));
passport.serializeUser(Employee.serializeUser());
passport.deserializeUser(Employee.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/home", function (req, res) {
    res.render("home");
});

 /*Showing secret page
app.get("/login", isLoggedIn, function (req, res) {
    res.render("login");
});*/

//Showing register formisLoggedIn
app.get("/welcome", function (req, res) {
    res.render("welcome");
});

//Handling user signup
app.post("/login", async (req, res) => {
    const user = await Employee.create({
      email: req.body.email,
      password: req.body.password
    });
  
    return res.status(200).json(user);
  });

//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});

//Handling user login
app.post("/login", async function(req, res){
    try {
        // check if the user exists
        const user = await Employee.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (user.result) {
            res.render("welcome");
          }   else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});

//Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/home');
      });
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}


app.listen(4000, function () {
    console.log("Server Has Started!");
});