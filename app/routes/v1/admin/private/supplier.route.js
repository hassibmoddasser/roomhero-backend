const express = require("express");
const {
  getSuppliers,
  addSupplier,
} = require("../../../../controllers/admin/supplier.controller");

// initiate express router
const router = express.Router();

router.get("/", getSuppliers);
router.post("/", addSupplier);

module.exports = router;
