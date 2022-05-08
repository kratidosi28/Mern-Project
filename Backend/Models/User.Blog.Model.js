const Blog = require("../Database/Schemas").user_blog;
const { Op } = require("sequelize");

module.exports = class {
  attributes = ["id", "userId", "title", "description", "author"];
  include = [{
    association: "userDetails",
    attributes: ["id","name", "email"],
  }]

  async add(params){
    return await Blog.create(params);
  }

  async getDetailById(id){
    let fields = [];

    if(id) 
    fields.push({ id });

    return await Blog.findOne({where: {
        [Op.or]: fields },
    });
  }

  async list(data){
    let attributes = this.attributes;
    let include = this.include;
    let where = [];

    if(data.search) {
      data.search.forEach((searchData) =>
        where.push({
          [searchData.field]: {
            [Op.substring]: searchData.value,
          },
        })
      );
    }

    const limit = parseInt(data.perPage || 10);
    const page = parseInt(data.pageNo || 1);
    const offset = (page - 1) * limit;

    const order = data.sort ? [[data.sort.field, data.sort.order]] : [["createdAt", "DESC"]];

    return await Blog.findAndCountAll({attributes, include, where, limit, offset, order});
  }

  async updateById(params, id){
    await Blog.update(params, { where: { id } });
  }

  async deleteById(id){
    await Blog.destroy({ where: { id } });
  }

}