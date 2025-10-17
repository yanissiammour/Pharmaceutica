// controllers/ProductBatchController.js
import ProductBatch from '../models/ProductBatch.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

export const getAllProductBatchs = async (req, res) => {
  try {
    const { q } = req.query;
    const ProductBatchs = await ProductBatch.findAll(q);
    handleResponse(res, ProductBatchs);
  } catch (err) {
    handleError(res, err);
  }
};

export const getProductBatchById = async (req, res) => {
  try {
    const ProductBatch = await ProductBatch.findById(req.params.id);
    if (ProductBatch) {
      handleResponse(res, ProductBatch);
    } else {
      res.status(404).json({ message: 'ProductBatch not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const createProductBatch = async (req, res) => {
  try {
    const [newProductBatch] = await ProductBatch.create(req.body);
    res.status(201).json(newProductBatch);
  } catch (err) {
    handleError(res, err);
  }
};

export const updateProductBatch = async (req, res) => {
  try {
    const [updatedProductBatch] = await ProductBatch.update(req.params.id, req.body);
    if (updatedProductBatch) {
      handleResponse(res, updatedProductBatch);
    } else {
      res.status(404).json({ message: 'ProductBatch not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteProductBatch = async (req, res) => {
  try {
    const count = await ProductBatch.remove(req.params.id);
    if (count > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'ProductBatch not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};