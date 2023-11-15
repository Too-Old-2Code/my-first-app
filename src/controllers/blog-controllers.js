const BlogModel = require("../models/blog-models");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.send(blogs);
  } catch (error) {
    res.send(error.message);
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.send(blog);
  } catch (error) {
    res.send(error.message);
  }
};

const createBlog = async (req, res) => {
  try {
    const newBlog = await BlogModel.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.send(newBlog);
  } catch (error) {
    res.send(error.message);
  }
};

const updateBlog = async (req, res) => {
  try {
    const newBlog = await BlogModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        content: req.body.content,
      },
      { new: true },
    );
    res.status(201).send(newBlog);
  } catch (error) {
    res.send(error.message);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const newBlog = await BlogModel.findByIdAndDelete({ _id: req.params.id });
    res.send(newBlog);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
