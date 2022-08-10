const httpUsers = require("./todoList.http");
const router = require("express").Router();

router.route("/list")
.get(httpUsers.getAll)
.post(httpUsers.getByCreate);

router
  .route("/list/:id")
  .get(httpUsers.getById)
  .delete(httpUsers.getByDelete)
  .put(httpUsers.getByUpdate);

module.exports = {
  router,
};
