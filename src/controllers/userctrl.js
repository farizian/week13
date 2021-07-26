
const models = require('../models/usermodel')
const {success, failed} = require('../helper/response')

// table user di dalam database coffee_shop di mysql
const userctrl = {
// menampilkan list user
  getlist: (req, res)=>{
    try{
      const query = req.query
      const search = query.search === undefined ? "" : query.search
      const field = query.field === undefined ? "username" : query.field
      const sort = query.sort === undefined ? "asc" : query.sort
      const limit = query.limit === undefined ? 50 : query.limit
      const offset = query.page === undefined || query.page == 1 ? 0 : (query.page-1)*limit
      models.getlist(search, field, sort, limit, offset)
      .then(async(result)=>{
        const total = await models.gettotal()
        const output = {
          search: search,
          limit: limit,
          page: query.page,
          totalpage: Math.ceil(total/limit),
        }
        success(res, output, result, "get user data success")
      })
      .catch((err)=>{
        failed(res, 500, err)
      })
    }
    catch(err){
      failed(res, 401, err)
    }
  },
// menampilkan detail table user berdasarkan id
  getdetail: (req, res)=>{
    try{
      const id = req.params.id //url parameter untuk mengambil id
      models.getdetail(id).then((result)=>{
        success(res, result, "get user data success")
      })
      .catch((err)=>{
        failed(res, 500, err)
      })
    }
    catch(err){
      failed(res, 401, err)
    }
  },
// insert data user
  insert: (req, res)=>{
    try{
      body = req.body
      first = body.first_name
      last = body.last_name
      birth = body.birth_date
      gender = body.gender
      username = body.username
      email = body.email
      password = body.password
      address = body.address
      phone = body.phone_number
      models.insert(first, last, birth, gender, username, email, password, address, phone).then((result)=>{
        success(res, result, "Input To User Data Success")
      })
      .catch((err)=>{
        failed(res, 400, err)
      })
    }
    catch(err){
      failed(res, 408, err)
    }
  },
  // delete data user
  del: (req, res)=>{
    try{
      const id = req.params.id
      models.del(id).then((result)=>{
        success(res, result, "Delete User Data Success")
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
      first = body.first_name
      last = body.last_name
      birth = body.birth_date
      gender = body.gender
      username = body.username
      email = body.email
      password = body.password
      address = body.address
      phone = body.phone_number
      models.update(id, first, last, birth, gender, username, email, password, address, phone).then((result)=>{
        success(res, result, "Update User Data Success")
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

module.exports = userctrl