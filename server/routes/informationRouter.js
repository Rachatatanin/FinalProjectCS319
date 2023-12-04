const express = require('express');
const router = express.Router();
const Information = require('../models/information.js');

//GET
router.get('/', async (req, res) => {
  try {
    const information = await Information.find();
    res.json({ information });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const { info_title, info_desc, info_link, info_category_id, createdAt } = req.body;
    const newInformation = new Information({ info_title, info_desc, info_link, info_category_id, createdAt });
    await newInformation.save();
    res.json(newInformation);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const { info_title, info_desc, info_link, info_category_id, createdAt } = req.body;
    
    // Log the received parameters
    console.log('Received PUT request:', req.params.id, req.body);

    const updatedInformation = await Information.findByIdAndUpdate(
      req.params.id,
      { info_title, info_desc, info_link, info_category_id, createdAt },
      { new: true }
    );
    
    // Log the updated information
    console.log('Updated Information:', updatedInformation);

    if (!updatedInformation) {
      return res.status(404).json({ error: 'Information not found' });
    }

    res.status(200).json({
      status: 'Success',
      data: updatedInformation,
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

    const deletedInformation = await Information.findByIdAndDelete(req.params.id);

    // Log the deleted information
    console.log('Deleted Information:', deletedInformation);

    if (!deletedInformation) {
      return res.status(404).json({ error: 'Information not found' });
    }

    res.status(200).json({
      status: 'Success',
      data: deletedInformation,
    });
  } catch (error) {
    // Log the error
    console.error('Error in DELETE request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;