// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import module
const comments = require('./comments');

// Create a GET route
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});