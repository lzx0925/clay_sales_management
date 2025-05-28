require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// 连接数据库
connectDB();

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
