
const models = require('../models/productmodel')
const {success, failed} = require('../helper/response')

// table product di dalam database coffee_shop di mysql
const productctrl = {
// menampilkan list product
  getlist: (req, res)=>{
    try{
      const query = req.query
      const search = query.search === undefined ? "" : query.search
      const field = query.field === undefined ? "name" : query.field
      const sort = query.sort === undefined ? "asc" : query.sort
      const limit = query.limit === undefined ? 50 : query.limit
      const offset = query.page === undefined || query.page == 1 ? 0 : (query.page-1)*limit
      models.getlist(search, field, sort, limit, offset).then(async(result)=>{
        const total = await models.gettotal()
        const output = {
          data: result,
          search: search,
          limit: limit,
          page: query.page,
          totalpage: Math.ceil(total/limit),
        }
        success(res, output, "get Product Data success")
      })
      .catch((err)=>{
        failed(res, 500, err)
      })
    }
    catch(err){
      failed(res, 401, err)
    }
  },
// menampilkan detail table product berdasarkan id
  getdetail: (req, res)=>{
    try{
      const id = req.params.id //url parameter untuk mengambil id
      models.getdetail(id).then((result)=>{
        success(res, result, "Get Product Data Success")
      })
      .catch((err)=>{
        failed(res, 500, err)
      })
    }
    catch(err){
      failed(res, 401, err)
    }
  },
// insert data product
  insert: (req, res)=>{
    try{
      body = req.body
      picture = body.picture
      name = body.name
      price = body.price
      category = body.category_id
      models.insert(picture, name, price, category).then((result)=>{
        success(res, result, "Input To Product Data Success")
      })
      .catch((err)=>{
        failed(res, 400, err)
      })
    }
    catch(err){
      failed(res, 408, err)
    }
  },
  // delete data Product
  del: (req, res)=>{
    try{
      const id = req.params.id
      models.del(id).then((result)=>{
        success(res, result, "Delete Product Data Success")
      })
      .catch((err)=>{
        failed(res, 404, err)
      })
    }
    catch(err){
      failed(res, 408, err)
    }
  },
  // update data produk
  update: (req, res)=>{
    try{
      body = req.body
      id = req.params.id
      picture = body.picture
      name = body.name
      price = body.price
      category = body.category_id
      models.update(id, picture, name, price, category).then((result)=>{
        success(res, result, "Update Product Data Success")
      })
      .catch((err)=>{
        failed(res, 400, err)
      })
    }
    catch(err){
      failed(res, 500, err)
    }
  },
}

module.exports = productctrl