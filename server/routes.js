const express = require('express');
const axios = require('axios');
const { processData } = require('./service');
const router = express.Router();

router.get('/data', async (req, res) => {
  const endpoint = 'https://api.data.gov.sg/v1/transport/carpark-availability';
  
  try {        
    const response = await axios.get(endpoint, {
      withCredentials: true
    });  
    const result = processData(response);
    res.json(result);
  } catch (error) {    c
    res.status(500).send('Error fetching data from API');
  }
});

module.exports = router;