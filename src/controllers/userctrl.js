
const models = require('../models/usermodel')

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
// menampilkan detail table user berdasarkan id
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
      payment = body.payment_method
      subtotal = body.sub_total
      tax = body.tax
      shipping = body.shipping
      models.insert(first, last, birth, gender, username, email, password, address, phone, payment, subtotal, tax, shipping).then((result)=>{
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
      first = body.first_name
      last = body.last_name
      birth = body.birth_date
      gender = body.gender
      username = body.username
      email = body.email
      password = body.password
      address = body.address
      phone = body.phone_number
      payment = body.payment_method
      subtotal = body.sub_total
      tax = body.tax
      shipping = body.shipping
      models.update(id, first, last, birth, gender, username, email, password, address, phone, payment, subtotal, tax, shipping).then((result)=>{
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

module.exports = userctrl