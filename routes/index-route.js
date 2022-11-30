const express = require("express");
const router = express.Router();
const bookData = require("../book-data");
const Book = require("../models/Book");
const mongoose = require("mongoose");
const { response } = require("express");
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB}@cluster0.wb2m06w.mongodb.net/?retryWrites=true&w=majority`
);

router.get("/", async (req, resp) => {
  const books = await Book.find();
  resp.send(books);
});
router.get("/update/:id", async (req, resp) => {
  const book = await Book.find({ isbn: req.params.id });
  resp.render("index", {
    isbn: book[0].isbn,
    title: book[0].title,
    subtitle: book[0].subtitle,
    author: book[0].author,
    published: book[0].published,
    publisher: book[0].publisher,
    pages: book[0].pages,
    description: book[0].description,
    website: book[0].website,
  });
});
router.post("/update/:id", async (req, resp) => {
  await Book.findOneAndUpdate({ isbn: req.params.id }, req.body);
  resp.redirect(`/${req.params.id}`);
});
router.get("/delete/:id", async (req, resp) => {
  const book = await Book.find({ isbn: req.params.id });
  resp.render("delete", {
    isbn: book[0].isbn,
    title: book[0].title,
    subtitle: book[0].subtitle,
    author: book[0].author,
    published: book[0].published,
    publisher: book[0].publisher,
    pages: book[0].pages,
    description: book[0].description,
    website: book[0].website,
  });
});
router.post("/delete/:id", async (req, resp) => {
  await Book.deleteOne({ isbn: req.params.id });
  resp.redirect("/");
});

router.get("/new", (req, resp) => {
  resp.render("new");
});
router.post("/new", async (req, resp) => {
  await Book.create(req.body);
  resp.redirect("/");
});

router.get("/:id", async (req, resp) => {
  const book = await Book.find({ isbn: req.params.id });
  resp.render("view", {
    isbn: book[0].isbn,
    title: book[0].title,
    subtitle: book[0].subtitle,
    author: book[0].author,
    published: book[0].published,
    publisher: book[0].publisher,
    pages: book[0].pages,
    description: book[0].description,
    website: book[0].website,
  });
});
module.exports = router;
