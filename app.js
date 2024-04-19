const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

const connection = require('./db');

// Serve static HTML pages
app.use(express.static(path.join(__dirname, 'Pages')));
// Serve static assets like JavaScript, CSS, images from the Static folder
app.use('/static', express.static(path.join(__dirname, 'Static')));


// Serve GeoJSON file
app.get('/geojson', (req, res) => {
  res.sendFile(path.join(__dirname, 'Counties_and_Unitary_Authorities_December_2021_UK_BUC.geojson'));
});

// Perform a query when the /data route is requested
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM your_table', (err, rows, fields) => {
    if (err) throw err;
    console.log('Data received from MySQL database:', rows);
    res.json(rows);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});