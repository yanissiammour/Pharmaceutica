// control/userController.js
import User from '../models/User.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

export const getAllUsers = async (req, res) => {
  try {
    const { q } = req.query; 
    const Users = await User.findAll(q);
    handleResponse(res, Users);
  } catch (err) {
    handleError(res, err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      handleResponse(res, user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const updateUsers = async (req, res) => {
  try {
    const updatedUsers = await User.update(req.params.id, req.body);
    if (updatedUsers.length > 0) {
      handleResponse(res, updatedUsers[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const count = await User.remove(req.params.id);
    if (count > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};
