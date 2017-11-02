const router = require("express").Router();
const booksController = require("../../controllers/usercontroller");

// Matches with "/api/users"
router.route("/user")
  .get(usercontroller.findAll)
  .post(usercontroller.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usercontroller.findById)
  .put(usercontroller.update)
  .delete(usercontroller.remove);

module.exports = router;
