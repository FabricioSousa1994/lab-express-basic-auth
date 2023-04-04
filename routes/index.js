const express = require("express");
const { isLoggedOut, isLoggedIn } = require("../middleware/route-guard");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/main", (req, res, next) => {
  try {
    res.render("main");
  } catch (error) {
    next(error);
  }
});

router.get("/private", isLoggedIn, (req, res, next) => {
  try {
    res.render("private");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
