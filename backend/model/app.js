import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  tenderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tender', required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  proposal: { type: String, required: true },
  bidAmount: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;