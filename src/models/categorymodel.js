// menghandle query table category
const db = require('../config/db')

const categorymodel ={
  gettotal: ()=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from category`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result.length)
        }
      })
    })
  },
  getlist:(search, field, sort, limit, offset)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from category where category like "%${search}%" order by ${field} ${sort} limit ${limit} offset ${offset}`, async(err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  getdetail:(id)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from category where id='${id}'`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  insert:(category)=>{
    return new Promise((resolve, reject)=>{
      db.query(`insert into category (category) value ('${category}')`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  del:(id)=>{
    return new Promise((resolve, reject)=>{
      db.query(`delete from category where id='${id}'`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  update:(id, category)=>{
    return new Promise((resolve, reject)=>{
      db.query(`update category set category='${category}' where id="${id}"`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
}

module.exports = categorymodel