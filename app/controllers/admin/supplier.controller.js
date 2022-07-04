const asyncHandler = require("express-async-handler");
const validUrl = require("valid-url");

const Supplier = require("../../models/supplier.model");

/**
 * @module app/controllers/admin/supplier
 * @description Get all suppliers
 * @route GET /api/v1/admin/supplier
 * @access private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<Object>}
 */
const getSuppliers = asyncHandler(async (req, res) => {
  try {
    const suppliers = await Supplier.find();

    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/**
 * @module app/controllers/admin/supplier
 * @description Add a supplier
 * @route POST /api/v1/admin/supplier
 * @access private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Express next middleware function
 * @returns {Promise<Object>}
 */
const addSupplier = asyncHandler(async (req, res) => {
  const {
    name, website, deliveryTime, minimumOrder,
  } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Name is required");
  }

  if (website && !validUrl.isUri(website)) {
    res.status(400);
    throw new Error("Website is not a valid URL");
  }

  if (deliveryTime && deliveryTime < 0) {
    res.status(400);
    throw new Error("Delivery time must be greater than 0");
  }

  if (minimumOrder && minimumOrder < 600) {
    res.status(400);
    throw new Error("Minimum order value must be at least 600");
  }

  try {
    // Create a new supplier
    const supplier = await Supplier.create(req.body);

    // Send the supplier back to the client
    res.status(201).json(supplier);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = Object.freeze({
  getSuppliers,
  addSupplier,
});
