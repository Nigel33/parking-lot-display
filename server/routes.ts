import express from 'express';
import axios from 'axios';
import { processData } from './service';

const router = express.Router();

router.get('/data', async (req, res) => {
  const endpoint = 'https://api.data.gov.sg/v1/transport/carpark-availability';
  
  try {        
    const response = await axios.get(endpoint);      
    const result = processData(response.data);
    res.json(result);
  } catch (error) {    
    res.status(500).send('Error fetching data from API');
  }
});

export default router;