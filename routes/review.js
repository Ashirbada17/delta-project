const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController = require("../controllers/reviews.js")
//delete ewview route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))
//post review route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createReview));
module.exports=router;