import mongoose from 'mongoose';

const DrugSchema = new mongoose.Schema({
  "DrugName": { type: String, required: true },
  Dosage: { type: String, required: true },
  Manufacturer: { type: String, required: true },
  Category: { type: String, required: true },
  "ImageURL": { type: String, required: true },
});

const Drugs = mongoose.models.drugs || mongoose.model('drugs', DrugSchema);

export default Drugs
