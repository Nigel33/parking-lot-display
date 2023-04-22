const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));
app.use('/api/', router);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});