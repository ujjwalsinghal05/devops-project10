const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Project Backend Running Successfully');
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000');
});
