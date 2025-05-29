const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.use('/product', productRoutes);
app.use('/purchase', purchaseRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
