const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const genData = require('./generateFakeData.js')
const data = genData()

app.use(morgan('dev'));
app.use(express.json());

app.get('/category/:category', (req, res) => {
  const { category } = req.params;
  console.log(category)
  const filteredData = data.filter((yee) => yee.category === category)
  console.log(filteredData)
  res.send(filteredData)
})

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, console.log(`App is listening on port 3000`))