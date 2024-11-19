import mongoose from 'mongoose';

const quotationSchema = new mongoose.Schema({
  vendId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // Simulating a foreign key to another collection
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // Simulating a foreign key to another collection
  },
  rate: {
    type: Number,
    required: false, // Ensures this field is not null
    min: [0, 'rate must be at least 0'], // Optional: validation for qty
  },
  amount: {
    type: Number,
    required: false, // Ensures this field is not null
    min: [0, 'amount must be at least 0'], // Optional: validation for qty
  },
  quotationStatus: {
    type: String,
    required: false, // Ensures this field is not null
    enum: ['pending', 'sent','canceled'], // Optional: define allowed values
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Set up a unique compound index
quotationSchema.index({ orderId: 1, vendId: 1 }, { unique: true });
// Export the model, avoiding redefinition issues in Next.js
const Quotation =  mongoose.models.quotations || mongoose.model('quotations', quotationSchema);

export default Quotation;