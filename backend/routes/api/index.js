const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const followsRouter = require("./follows.js");
const likesRouter = require("./likes.js");
const reviewsRouter = require("./reviews.js");



router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

router.use("/follows", followsRouter);

router.use("/likes", likesRouter);

router.use("/reviews", reviewsRouter);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

module.exports = router;
