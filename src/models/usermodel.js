/* eslint-disable max-len */
// menghandle query table user
const db = require('../config/db');

const usermodel = {
  gettotal: () => new Promise((resolve, reject) => {
    db.query('select * from user', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length);
      }
    });
  }),
  getlist: (search, field, sort, limit, offset) => new Promise((resolve, reject) => {
    db.query(`select * from user where username like "%${search}%" order by ${field} ${sort} limit ${limit} offset ${offset}`, async (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  checkEmail: (email) => new Promise((resolve, reject) => {
    db.query(`select * from user where email="${email}"`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  getdetail: (id) => new Promise((resolve, reject) => {
    db.query(`select * from user where id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  insert: (pic, first, last, birth, gender, username, email, password, address, phone) => new Promise((resolve, reject) => {
    db.query(`insert into user (profile_pic, first_name, last_name, birth_date, gender, username, email, password, address, phone_number) value ('${pic}','${first}', '${last}', '${birth}', '${gender}', '${username}', '${email}', '${password}', '${address}', '${phone}')`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  del: (id) => new Promise((resolve, reject) => {
    db.query(`delete from user where id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  update: (id, first, last, birth, gender, username, email, password, address, phone) => new Promise((resolve, reject) => {
    db.query(`update user set first_name="${first}", last_name="${last}", birth_date="${birth}", gender="${gender}", username="${username}", email="${email}", password="${password}", address="${address}", phone_number="${phone}" where id="${id}"`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
};

module.exports = usermodel;
