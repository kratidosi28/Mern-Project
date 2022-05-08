const userBlogModel = new (require("../Models/User.Blog.Model"))();

module.exports = class{
  async add(req, res){
    try{
      const newBlog = await userBlogModel.add(req.body);
      res.handler.created(newBlog, "BLOG.ADDED");
    } 
    catch(err){
      res.handler.serverError(err);
    }
  }

  async list(req, res){
    try{
      const blogs = await userBlogModel.list(req.body);
      res.handler.success(blogs);
    } 
    catch(err){
      res.handler.serverError(err);
    }
  }

  async update(req, res){
    try{
     const blog = await userBlogModel.getDetailById(req.params.id);
      if(blog){
      await userBlogModel.updateById(req.body, req.params.id);
      res.handler.success(undefined, "BLOG.UPDATED");
      }
    } 
    catch(err){
      res.handler.serverError(err);
    }
  }

  async delete(req, res){
    try{
      const blog = await userBlogModel.getDetailById(req.params.id);
      if(blog){
      await userBlogModel.deleteById(req.params.id);
      res.handler.success(undefined, "BLOG.DELETED");
      }
    } 
    catch(err){
      res.handler.serverError(err);
    }
  }
};
