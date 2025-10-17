// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

/**
 * Middleware to protect routes by verifying JWT.
 * Attaches the decoded user payload to the request object.
 */
export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

/**
 * Middleware to authorize based on user role.
 * Should be used AFTER the `protect` middleware.
 * @param {...string} roles - List of roles that are allowed to access the route.
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: You do not have the required permissions' });
    }
    next();
  };
};