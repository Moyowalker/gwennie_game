const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'gwennie.html'));
});

const port = 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Game server running at http://0.0.0.0:${port}`);
});
