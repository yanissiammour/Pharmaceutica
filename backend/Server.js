// Server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productBatchesRoutes from './routes/productBatchRoutes.js';
import recallRoutes from './routes/recallRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// API Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/productBatchs',productBatchesRoutes)
app.use('/api/suppliers',supplierRoutes)
app.use('/api/users', userRoutes)
app.use('/api/recalls', recallRoutes)


app.listen(PORT, () => {
  console.log(` Server is listening on http://localhost:${PORT}`);
});