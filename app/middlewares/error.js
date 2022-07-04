/**
 * @module app/middleware/error
 * @description Error handling middleware
 * @route GET /api/v1/admin/supplier
 * @access private
 * @param {Object} err - Express error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Express next middleware function
 * @returns {Promise<Object>}
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

module.exports = Object.freeze({
  errorHandler,
});
