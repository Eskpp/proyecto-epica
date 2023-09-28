const postRoutes = require("express").Router();
const { postController } = require("../controllers/post.controller");

//leer posts
postRoutes.get("/post", postController.getAllPosts);

postRoutes.get("/post/createpost", postController.createPostView);

//crear post
postRoutes.post("/post/savepost", postController.createPost);

//DELETE POST
postRoutes.get("/post/delete/:id", postController.deletePost);

//EDITAR POST
postRoutes.post("/post/update/", postController.editPost);

postRoutes.get("/post/edit/:id", postController.editPostView);

postRoutes.get("/post/:id", postController.getPost);

module.exports = postRoutes;
