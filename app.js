const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;


// Serve static HTML pages
app.use(express.static(path.join(__dirname, 'Pages')));
// Serve static assets like JavaScript, CSS, images from the Static folder
app.use('/static', express.static(path.join(__dirname, 'Static')));


// Serve GeoJSON file
app.get('/geojson', (req, res) => {
  res.sendFile(path.join(__dirname, 'Counties_and_Unitary_Authorities_December_2021_UK_BUC.geojson'));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});