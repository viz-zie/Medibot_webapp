import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true, // Simulates a primary key by ensuring unique values
  },
  customerId: {
    type: String,
    required: true, // Simulating a foreign key to another collection
  },
  itemId: {
    type: String,
    required: true, // Simulating a foreign key to another collection
  },
  qty: {
    type: Number,
    required: true, // Ensures this field is not null
    min: [1, 'Quantity must be at least 1'], // Optional: validation for qty
  },
  orderStatus: {
    type: String,
    required: true, // Ensures this field is not null
    enum: ['requested', 'shipped', 'delivered', 'canceled'], // Optional: define allowed values
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Export the model, avoiding redefinition issues in Next.js
const Order =  mongoose.models.orders || mongoose.model('orders', orderSchema);

export default Order;