const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require("mongoose");

const posts = [];
const app = express();
app.use(express.static('public'))

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/realli", {useNewUrlParser: true, useUnifiedTopology: true});

const postSchema = mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){
  res.render("home");
});
app.get("/home", function(req, res){
  res.render("home");
});
app.get("/about", function(req, res){
  res.render("about");
});

app.get("/samsung", function(req, res){
  res.render("samsung");
});
app.get("/LG", function(req, res){
  res.render("LG");
});
app.get("/xiaomi", function(req, res){
  res.render("xiaomi");
});
app.get("/nokia", function(req, res){
  res.render("nokia");
});

app.get("/request", function(req, res){
  res.render("request");
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
