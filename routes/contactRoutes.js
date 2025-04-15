// server/server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');  // Menambahkan rute

const app = express();
const port = process.env.PORT || 5000;

// Middleware untuk parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Menggunakan rute kontak
app.use('/send-message', contactRoutes);

// Rute utama untuk frontend (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
