// menghandle query table product
const db = require('../config/db')

const prdmodel ={
  gettotal: ()=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from product`, (err, result)=>{
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
      db.query(`select p.id, p.picture, p.name, p.price, c.category from product p left join category c on p.category_id=c.id where name like "%${search}%" order by ${field} ${sort} limit ${limit} offset ${offset}`, async(err, result)=>{
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
      db.query(`select * from product where id='${id}'`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  insert:(id_ins, picture, name, price, category)=>{
    return new Promise((resolve, reject)=>{
      db.query(`insert into product (id, picture, name, price, category_id) value ('${id_ins}','${picture}', '${name}', '${price}', '${category}')`, (err, result)=>{
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
      db.query(`delete from product where id='${id}'`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  update:(id, id_upd, picture, name, price, category)=>{
    return new Promise((resolve, reject)=>{
      db.query(`update product set id='${id_upd}', picture='${picture}', name='${name}', price='${price}', category_id='${category}' where id='${id}' `, (err, result)=>{
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

module.exports = prdmodel