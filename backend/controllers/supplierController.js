// controllers/supplierController.js
import Supplier from '../models/Supplier.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

export const getAllSuppliers = async (req, res) => {
  try {
    const { q } = req.query;
    const suppliers = await Supplier.findAll(q);
    handleResponse(res, suppliers);
  } catch (err) {
    handleError(res, err);
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (supplier) {
      handleResponse(res, supplier);
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const createSupplier = async (req, res) => {
  try {
    const [newSupplier] = await Supplier.create(req.body);
    res.status(201).json(newSupplier);
  } catch (err) {
    handleError(res, err);
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const [updatedSupplier] = await Supplier.update(req.params.id, req.body);
    if (updatedSupplier) {
      handleResponse(res, updatedSupplier);
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const count = await Supplier.remove(req.params.id);
    if (count > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};