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
  insert:(picture, name, price)=>{
    return new Promise((resolve, reject)=>{
      db.query(`insert into product (picture, name, price) value ('${picture}', '${name}', '${price}')`, (err, result)=>{
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
  update:(id, picture, name, price)=>{
    return new Promise((resolve, reject)=>{
      db.query(`update product set picture='${picture}', name='${name}', price='${price}' where id="${id}"`, (err, result)=>{
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