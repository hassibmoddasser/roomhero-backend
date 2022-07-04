const asyncHandler = require("express-async-handler");

const getSuppliers = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      msg: "Suppliers fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const addSupplier = asyncHandler(async (req, res) => {
  try {
    res.status(201).json({
      msg: "Supplier added successfully",
    });
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
