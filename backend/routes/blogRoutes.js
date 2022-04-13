const {Router} = require("express");
const router = Router();
const blogController = require("../controllers/blogController");
const {blogValidator} = require("../validation/blog-validation");

router.post("/Create", blogValidator(), blogController.postBlog)
router.get("/About", blogController.getBlogs)
router.get("/", blogController.getBlogs)
router.get("/:id", blogController.getBlogDetails)
router.delete("/:blogId", blogController.deleteBlog)
router.post("/edit/:id", blogController.editBlog)

module.exports = router;
