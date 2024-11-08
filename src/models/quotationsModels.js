import mongoose from 'mongoose';

const quotationSchema = new mongoose.Schema({
  quotationId: {
    type: String,
    required: true,
    unique: true, // Simulates a primary key by ensuring unique values
  },
  userId: {
    type: String,
    required: true, // Simulating a foreign key to another collection
  },
  orderId: {
    type: String,
    required: true, // Simulating a foreign key to another collection
  },
  itemId: {
    type: String,
    required: true, // Simulating a foreign key to another collection
  },
  rate: {
    type: Number,
    required: true, // Ensures this field is not null
    min: [0, 'rate must be at least 0'], // Optional: validation for qty
  },
  amount: {
    type: Number,
    required: true, // Ensures this field is not null
    min: [0, 'amount must be at least 0'], // Optional: validation for qty
  },
  quotationStatus: {
    type: String,
    required: true, // Ensures this field is not null
    enum: ['pending', 'sent','canceled'], // Optional: define allowed values
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Export the model, avoiding redefinition issues in Next.js
const Quotation =  mongoose.models.quotations || mongoose.model('quotations', quotationSchema);

export default Quotation;