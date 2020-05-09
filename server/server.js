const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../mock/index.html')));

app.use((req, res) => res.status(200).sendFile(path.resolve(__dirname, '../mock/index.html')));










app.listen(PORT, () => console.log(`Listening on port ${PORT}`));