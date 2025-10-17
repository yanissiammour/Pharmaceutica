// controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const handleError = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({ message });
};

export const register = async (req, res) => {
  const { username, email, password, role, } = req.body;
  
  if (!username || !email || !password) {
    return handleError(res, 'Please provide username, email, and password', 400);
  }
  if (password.length < 6) {
    return handleError(res, 'Password must be at least 6 characters', 400);
  }

  try {
    if (await User.findByEmail(email)) {
      return handleError(res, 'An account with this email already exists', 409);
    }
    if (await User.findByUsername(username)) {
      return handleError(res, 'This username is already taken', 409);
    }

    const newUser = await User.create({ username, email, password, role },userId);

    res.status(201).json({
      message: 'User registered successfully!',
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    handleError(res, 'Server error during registration.');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return handleError(res, 'Please provide email and password', 400);
  }

  try {
    const user = await User.findByEmail(email);
    if (!user || !(await User.comparePassword(password, user.password))) {
      return handleError(res, 'Invalid credentials', 401);
    }

    
    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role, // The role is now in the token!
      },
    };

    // Sign and return the token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.status(200).json({
        message: 'Logged in successfully',
        token,
        user: { id: user.id, username: user.username, email: user.email, role: user.role }
    });

  } catch (err) {
    console.error(err);
    handleError(res, 'Server error during login.');
  }
};