const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define the schema for the Contact model
const ContactSchema = new Schema({
  salutation: {
    type: String,
    enum: ["Herr", "Frau"],
    required: [true, "Salutation is required"],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  position: {
    type: String,
  },
  spokenLanguage: {
    type: String,
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  email: {
    type: String,
  },
});

// Define the schema for the Supplier model
const SupplierSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  website: {
    type: String,
  },
  internalComments: {
    type: String,
  },
  deliveryTime: {
    type: Number,
    min: [0, "Delivery time must be greater than 0"],
  },
  minimumOrder: {
    type: Number,
    min: [600, "Minimum order value must be at least 600"],
  },
  contacts: {
    type: [ContactSchema],
    default: [],
  },
}, {
  timestamps: true,
});

// Export the model
module.exports = mongoose.model("Supplier", SupplierSchema);
