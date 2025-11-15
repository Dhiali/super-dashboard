const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

// Proxy endpoint for images
app.get('/proxy-image', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('Missing url parameter');
  }
  try {
    // Fetch the image as a stream
    const response = await axios.get(url, { responseType: 'stream' });
    res.setHeader('Content-Type', response.headers['content-type']);
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send('Failed to fetch image');
  }
});

app.listen(PORT, () => {
  console.log(`Image proxy server running on port ${PORT}`);
});
