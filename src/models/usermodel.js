// menghandle query table user
const db = require('../config/db')

const usermodel ={
  getlist:(search, field, sort, limit, offset)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from user where username like "%${search}%" order by ${field} ${sort} limit ${limit} offset ${offset}`, async(err, result)=>{
        if(err){
          reject(err)
        }
        else{
          const total = await new Promise((resolve, reject)=>{
            db.query(`select * from user`, (err, result)=>{
              if(err){
                reject(err)
              }
              else{
                resolve(result.length)
              }
            })
          })
          const totalpage= Math.ceil(total/limit)
          const output = {
            data: result,
            totalpage: totalpage,
            search: search,
            limit: limit,
            page: offset === 0 ? 1 : offset,
          }
          resolve(output)
        }
      })
    })
  },
  getdetail:(id)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from user where id='${id}'`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  insert:(first, last, birth, gender, username, email, password, address, phone, payment, subtotal, tax, shipping)=>{
    return new Promise((resolve, reject)=>{
      db.query(`insert into user (first_name, last_name, birth_date, gender, username, email, password, address, phone_number, payment_method, sub_total, tax, shipping) value ('${first}', '${last}', '${birth}', '${gender}', '${username}', '${email}', '${password}', '${address}', '${phone}', '${payment}', '${subtotal}', '${tax}', '${shipping}')`, (err, result)=>{
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
      db.query(`delete from user where id='${id}'`, (err, result)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(result)
        }
      })
    })
  },
  update:(id, first, last, birth, gender, username, email, password, address, phone, payment, subtotal, tax, shipping)=>{
    return new Promise((resolve, reject)=>{
      db.query(`update user set first_name="${first}", last_name="${last}", birth_date="${birth}", gender="${gender}", username="${username}", email="${email}", password="${password}", address="${address}", phone_number="${phone}", payment_method="${payment}", sub_total="${subtotal}", tax="${tax}", shipping="${shipping}" where id="${id}"`, (err, result)=>{
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

module.exports = usermodel