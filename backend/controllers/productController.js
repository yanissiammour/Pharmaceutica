// controllers/ProductController.js
import Product from '../models/Product.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

export const getAllProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const Products = await Product.findAll(q);
    handleResponse(res, Products);
  } catch (err) {
    handleError(res, err);
  }
};

export const getProductById = async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);
    if (Product) {
      handleResponse(res, Product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const createProduct = async (req, res) => {
  try {
    const [newProduct] = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    handleError(res, err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const [updatedProduct] = await Product.update(req.params.id, req.body);
    if (updatedProduct) {
      handleResponse(res, updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const count = await Product.remove(req.params.id);
    if (count > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};