// control/clientController.js

import Client from '../models/Client.js';

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json({ message: err.message });

export const getAllClients = async (req, res) => {
  try {
    const { q } = req.query;
    const clients = await Client.findAll(q);
    handleResponse(res, clients);
  } catch (err) {
    handleError(res, err);
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      handleResponse(res, client);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const createClient = async (req, res) => {
  try {
    const [newClient] = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (err) {
    handleError(res, err);
  }
};

export const updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.update(req.params.id, req.body);
    if (updatedClient.length > 0) {
      handleResponse(res, updatedClient[0]);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteClient = async (req, res) => {
  try {
    const count = await Client.remove(req.params.id);
    if (count > 0) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (err) {
    handleError(res, err);
  }
};