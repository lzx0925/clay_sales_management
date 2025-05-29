const PurchaseRecord = require('../models/PurchaseRecord');

// Create
exports.createPurchase = async (req, res) => {
  try {
    const record = await PurchaseRecord.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Read All (with populated products)
exports.getAllPurchases = async (req, res) => {
  const records = await PurchaseRecord.find().populate('products');
  res.json(records);
};

// Read One
exports.getPurchase = async (req, res) => {
  const record = await PurchaseRecord.findById(req.params.id).populate('products');
  if (record) res.json(record);
  else res.status(404).json({ message: 'Purchase record not found' });
};

// Update
exports.updatePurchase = async (req, res) => {
  const record = await PurchaseRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

// Delete
exports.deletePurchase = async (req, res) => {
  await PurchaseRecord.findByIdAndDelete(req.params.id);
  res.json({ message: 'Purchase record deleted' });
};
