const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");
const { Review, User, Comment, Like } = require("../../db/models");

const router = express.Router();

// Get all reviews
router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({
    include: [ User, Comment, Like ],
    order: [['createdAt', 'DESC']]
  });

  return res.json(reviews);
}));

// Get a review by id
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const reviewId = req.params.id;
  const review = await Review.findByPk(reviewId, {
    include: [ User, Comment, Like ],
  });

  return res.json(review);
}));

// Get reviews by user id
router.get('/user/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const reviews = await Review.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  });

  return res.json(reviews);
}));

// Create a review
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { userId, body, movieId, rating, images } = req.body;

  const review = await Review.create({
    userId,
    body,
    movieId,
    rating,
    images
  });

  return res.json(review);
}));

// Update a review
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const reviewId = req.params.id;
  const review = await Review.findByPk(reviewId);

  review.update(req.body)

  return res.json(review);
}));

// Delete a review
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const reviewId = req.params.id;
  const review = await Review.findByPk(reviewId);

  await review.destroy();
  return res.json(review);
}));


module.exports = router;
