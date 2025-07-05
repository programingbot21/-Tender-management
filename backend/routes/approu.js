import express from 'express';
import Application from '../model/app.js';


const router3 = express.Router();

// POST /api/applications - submit a proposal
router3.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tenders/:tenderId/applications - get all proposals for a tender
router3.get('/tender/:tenderId', async (req, res) => {
  try {
    const apps = await Application.find({ tenderId: req.params.tenderId }).populate('companyId', 'name');
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router3;
