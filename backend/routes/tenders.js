import express from 'express';
import Tender from '../model/tender.js';
// import Tender from '../models/tenderModel.js';

const router2 = express.Router();

// Create Tender
router2.post('/', async (req, res) => {
  try {
    const tender = new Tender(req.body);
    const saved = await tender.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Tenders (paginated)
router2.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const tenders = await Tender.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Tender.countDocuments();
    res.json({ tenders, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Tenders by Company
router2.get('/company/:companyId', async (req, res) => {
  try {
    const tenders = await Tender.find({ companyId: req.params.companyId });
    res.json(tenders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Tender
router2.put('/:id', async (req, res) => {
  try {
    const updated = await Tender.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Tender
router2.delete('/:id', async (req, res) => {
  try {
    await Tender.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tender deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router2;
