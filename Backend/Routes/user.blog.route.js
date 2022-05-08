const express = require("express")
const router = express.Router()

const userBlogController = new(require("../Controllers/User.blog.Controller"))()
const Authentication = require("../Middleware/authentication")

//Create Blog
router.route("/add")
    .post(Authentication.user, userBlogController.add)

//Blog List
router.route("/list")
    .post(Authentication.user, userBlogController.list)

//Update and Delete Blog
router.route("/:id?")
    .put(Authentication.user, userBlogController.update)
    .delete(Authentication.user, userBlogController.delete)

module.exports = router;