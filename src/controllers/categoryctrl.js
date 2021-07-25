
const models = require('../models/categorymodel')

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
      models.getlist(search, field, sort, limit, offset).then((result)=>{
        res.json(result)
      })
      .catch((err)=>{
        res.json(err)
      })
    }
    catch(err){
      res.json(err)
    }

  },
// menampilkan detail table category berdasarkan id
  getdetail: (req, res)=>{
    try{
      const id = req.params.id //url parameter untuk mengambil id
      models.getdetail(id).then((result)=>{
        res.json(result)
      })
      .catch((err)=>{
        res.json(err)
      })
    }
    catch(err){
      res.json(err)
    }
  },
// insert data category
  insert: (req, res)=>{
    try{
      body = req.body
      category = body.category
      models.insert(category).then((result)=>{
        res.json(result)
      })
      .catch((err)=>{
        res.json(err)
      })
    }
    catch(err){
      res.json(err)
    }
  },
  del: (req, res)=>{
    try{
      const id = req.params.id
      models.del(id).then((result)=>{
        res.json(result)
      })
      .catch((err)=>{
        res.json(err)
      })
    }
    catch(err){
      res.json(err)
    }
  },
  update: (req, res)=>{
    try{
      body = req.body
      id = req.params.id
      category = body.category
      models.update(id, category).then((result)=>{
        res.json(result)
      })
      .catch((err)=>{
        res.json(err)
      })
    }
    catch(err){
      res.json(err)
    }
  },
}

module.exports = categoryctrl