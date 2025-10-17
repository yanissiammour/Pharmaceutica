// controllers/orderController.js
import Order from '../models/Order.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    handleResponse(res, orders);
  } catch (err) {
    handleError(res, err);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
        const items = await Order.findItemsByOrderId(req.params.id);
        handleResponse(res, { ...order, items });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const createOrder = async (req, res) => {
  try {
    // Expects body: { client_id, status, items: [...] }
    const newOrder = await Order.createWithItems(req.body);
    res.status(201).json(newOrder);
  } catch (err) {

    res.status(400).json({ message: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    if (req.body.status && (req.user.role !== 'accounting') && (req.user.role !== 'admin')) {
      return res.status(403).json({ message: 'Protected access' });
    }
    const [updatedOrder] = await Order.update(req.params.id, req.body);
    if (updatedOrder) {
      handleResponse(res, updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteOrder = async (req, res) => {
    // Note: Deleting an order should ideally be handled carefully.
    // Maybe just update status to 'canceled'. A hard delete is shown here.
  try {
    const count = await Order.remove(req.params.id);
    if (count > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};