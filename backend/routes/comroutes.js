// routes/company.js
import express from 'express';
// import Company from '../models/company.model.js';
import multer from 'multer';
import { supabase } from '../utils/supabase.js';
import Company from '../model/commod.js';
// import { supabase } from '../utils/supabase.js';

const router1 = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// router1.post('/', async (req, res) => {
//   const { name, industry, description } = req.body;
//   const company = await Company.create({ name, industry, description });
//   res.status(201).json(company);
// });


// router1.post('/', async (req, res) => {
//   const { name, industry, description, logoUrl } = req.body;

//   try {
//     const company = await Company.create({
//       name,
//       industry,
//       description,
//       logoUrl, // Add this line
//     });

//     res.status(201).json(company);
//   } catch (error) {
//     console.error("Error creating company:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router1.post('/', async (req, res) => {
  const { name, industry, description, logoUrl } = req.body;
  const company = await Company.create({ name, industry, description, logoUrl });
  res.status(201).json(company);
});



router1.get('/', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

router1.get('/:id', async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.json(company);
});

router1.put('/:id', async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router1.delete('/:id', async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Upload logo to Supabase
router1.post('/:id/logo', upload.single('logo'), async (req, res) => {
  const file = req.file;
  const companyId = req.params.id;

  const { data, error } = await supabase.storage
    .from('company-logos')
    .upload(`logos/${companyId}-${file.originalname}`, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
    });

  if (error) return res.status(500).json({ error: error.message });

  const { publicUrl } = supabase.storage.from('company-logos').getPublicUrl(data.path);
  await Company.findByIdAndUpdate(companyId, { logoUrl: publicUrl });

  res.json({ url: publicUrl });
});

export default router1;
