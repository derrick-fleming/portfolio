
const express = require('express');
const path = require('path');
const app = express();

const joinPath = path.join(__dirname, 'public');

const staticExpress = express.static(joinPath);

app.use(staticExpress);

app.use('/api', (req, res) => {
  res.status(404).json({ error: `cannot ${req.method} ${req.url}` });
});

app.use((req, res) => {
  res.sendFile('/index.html', {
    root: path.join(__dirname, 'public')
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
