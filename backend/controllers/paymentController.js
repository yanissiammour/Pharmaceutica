// controllers/paymentController.js
import Payment from '../models/Payment.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

// Get all payments, optionally filtered by order_id from query string
export const getAllPayments = async (req, res) => {
  try {
    const { orderId } = req.query; // e.g., /api/payments?orderId=123
    const payments = await Payment.findAll(orderId);
    handleResponse(res, payments);
  } catch (err) {
    handleError(res, err);
  }
};

export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (payment) {
      handleResponse(res, payment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

// Create a new payment
export const createPayment = async (req, res) => {
  try {
    // Expects body like: { order_id, amount, method, reference_no }
    const [newPayment] = await Payment.create(req.body);
    res.status(201).json(newPayment);
  } catch (err) {
    handleError(res, err);
  }
};

// Update an existing payment (e.g., add a reference number)
export const updatePayment = async (req, res) => {
  try {
    const [updatedPayment] = await Payment.update(req.params.id, req.body);
    if (updatedPayment) {
      handleResponse(res, updatedPayment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

// Delete a payment
export const deletePayment = async (req, res) => {
  try {
    const count = await Payment.remove(req.params.id);
    if (count > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};