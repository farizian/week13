// menghandle query table product
const db = require('../config/db');

const prdmodel = {
  gettotal: () => new Promise((resolve, reject) => {
    db.query('select * from product', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length);
      }
    });
  }),
  getlist: (search, field, sort, limit, offset) => new Promise((resolve, reject) => {
    db.query(`select p.id, p.idStyle, p.img, p.disc, p.prdname, p.price, c.category, p.qty from product p left join category c on p.category_id=c.id where prdname like "%${search}%" order by ${field} ${sort} limit ${limit} offset ${offset}`, async (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  getdetail: (id) => new Promise((resolve, reject) => {
    db.query(`select * from product where id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  insert: (idStyle, img, disc, prdname, price, category, qty) => new Promise((resolve, reject) => {
    db.query(`insert into product (idStyle, img, disc, prdname, price, category_id, qty) value ('${idStyle}','${img}', '${prdname}', '${disc}', '${price}', '${category}', '${qty}')`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  del: (id) => new Promise((resolve, reject) => {
    db.query(`delete from product where id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  update: (id, idStyle, img, disc, prdname, price, category) => new Promise((resolve, reject) => {
    db.query(`update product set idStyle='${idStyle}', picture='${img}', disc='${disc}', prdname='${prdname}', price='${price}', category_id='${category}' where id='${id}' `, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
};

module.exports = prdmodel;
