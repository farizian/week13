
const models = require('../models/categorymodel')
const {success, failed} = require('../helper/response')

// table category di dalam database coffee_shop di mysql
const categoryctrl = {
// menampilkan list category
  getlist: (req, res)=>{
    try{
      const query = req.query
      const search = query.search === undefined ? "" : query.search
      const field = query.field === undefined ? "category" : query.field
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
        success(res, output, "Get Category Data Success")
      })
      .catch((err)=>{
        failed(res, 500, err)
      })
    }
    catch(err){
      failed(res, 401, err)
    }
  },
// menampilkan detail table category berdasarkan id
  getdetail: (req, res)=>{
    try{
      const id = req.params.id //url parameter untuk mengambil id
      models.getdetail(id).then((result)=>{
        success(res, result, "Get Category Data Success")
      })
      .catch((err)=>{
        failed(res, 500, err)
      })
    }
    catch(err){
      failed(res, 401, err)
    }
  },
// insert data category
  insert: (req, res)=>{
    try{
      body = req.body
      category = body.category
      id_ins = body.id
      models.insert(id_ins, category).then((result)=>{
        success(res, result, "Input To Category Data Success")
      })
      .catch((err)=>{
        failed(res, 400, err)
      })
    }
    catch(err){
      failed(res, 408, err)
    }
  },
  // delete data category
  del: (req, res)=>{
    try{
      const id = req.params.id
      models.del(id).then((result)=>{
        success(res, result, "Delete Category Data Success")
      })
      .catch((err)=>{
        failed(res, 404, err)
      })
    }
    catch(err){
      failed(res, 408, err)
    }
  },
  update: (req, res)=>{
    try{
      body = req.body
      id = req.params.id
      id_upd = body.id
      category = body.category
      models.update(id, id_upd, category).then((result)=>{
        success(res, result, "Update Category Data Success")
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

module.exports = categoryctrl