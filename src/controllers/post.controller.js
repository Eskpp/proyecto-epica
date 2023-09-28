const Post = require("../models/post.model");

const postController = {};
//ejemplo saludo
postController.saludo = (req, res) => {
  res.send("hola desde el controlador de post y ruta de post");
};

//GET ALL
postController.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.render("post", { result: posts });
};

//CREATE POST
postController.createPost = async (req, res) => {
  const { title, content, image } = req.body;

  const post = {
    title: title,
    content: content,
    image: image,
  };
  try {
    await Post.create(post);
    res.redirect("/post");
  } catch (error) {
    res.status(400).send({ message: "Error en la alta de post." });
  }
};

//DELETE POST
postController.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletePost = await Post.destroy({
      where: {
        id: id,
      },
    });
    if (deletePost) {
      return res.redirect("/post")
    } else {
      return res.status(400).send({ message: "post no encontrado." });
    }
  } catch (error) {
    return res.status(400).send({ message: "error al eliminar post." });
  }
};

//EDIT POST
postController.editPost = async (req, res) => {
  const { id, title, content, image } = req.body;
  const post = {
    title: title,
    content: content,
    image: image,
  };
  try {
    await Post.update(post, { where: { id: id } });
    return res.redirect("/post");
  } catch (error) {
    return res.status(400).send({ message: "error al actualizar post" });
  }
};

postController.createPostView = async (req, res) => {
  res.render("createPost");
};

postController.editPostView = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id: id } });
  res.render("editPost", { post: post });
};

postController.getPost = async (req, res) => {
  const {id} = req.params;
  const post = await Post.findOne({ where: { id: id } });
  res.render("postView", { post: post });
};

module.exports = { postController };
