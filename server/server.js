const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
require('dotenv').config();
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database : 

connectDB();

app.use(express.json({ extended: false }));

app.use('/send', require('./routes/contact'));

app.use(cors());


app.use(express.static(path.join(__dirname,'../client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});