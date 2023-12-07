const express = require('express');
const router = express.Router();
const Information_category = require('../models/information_category.js');

//GET
router.get('/', async (req, res) => {
  try {
    const information_category = await Information_category.find();
    res.json({ information_category });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const { info_category_id, info_category_name } = req.body;
    const newCategory = new Information_category({ info_category_id, info_category_name });
    await newCategory.save();
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const { info_category_id, info_category_name } = req.body;
    
    // Log the received parameters
    console.log('Received PUT request:', req.params.id, req.body);

    const updatedInformation_category = await Information_category.findByIdAndUpdate(
      req.params.id,
      { info_category_id, info_category_name },
      { new: true }
    );
    
    // Log the updated Information_category
    console.log('Updated Information Category:', updatedInformation_category);

    if (!updatedInformation_category) {
      return res.status(404).json({ error: 'Information Category not found' });
    }

    res.status(200).json({
      status: 'Success',
      data: updatedInformation_category,
    });
  } catch (error) {
    // Log the error
    console.error('Error in PUT request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//DELETE
router.delete('/:id', async (req, res) => {
  try {
    // Log the received parameter
    console.log('Received DELETE request:', req.params.id);

    const deletedInformation_category = await Information_category.findByIdAndDelete(req.params.id);

    // Log the deleted Information_category
    console.log('Deleted Information_category:', deletedInformation_category);

    if (!deletedInformation_category) {
      return res.status(404).json({ error: 'Information_category not found' });
    }

    res.status(200).json({
      status: 'Success',
      data: deletedInformation_category,
    });
  } catch (error) {
    // Log the error
    console.error('Error in DELETE request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;