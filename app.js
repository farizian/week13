const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const userrouter = require('./src/routers/userrouter');
const prdrouter = require('./src/routers/productrouter');
const catrouter = require('./src/routers/categoryrouter');

const app = express();
app.use(cors());
app.use(parser.json());
app.use(userrouter);
app.use(prdrouter);
app.use(catrouter);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Service berjalan di port 3000');
});
