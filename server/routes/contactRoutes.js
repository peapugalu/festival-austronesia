// server/routes/contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Menggunakan konfigurasi email dari file config/emailConfig.js
const emailConfig = require('../config/emailConfig');

// Membuat transporter Nodemailer dengan konfigurasi email
const transporter = nodemailer.createTransport(emailConfig);

// Rute untuk menangani pengiriman form kontak (POST)
router.post('/', (req, res) => {
  // Mengambil data dari request body
  const { name, email, message } = req.body;

  // Memastikan bahwa semua field diisi
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Semua field harus diisi.' });
  }

  // Mengatur opsi email yang akan dikirim
  const mailOptions = {
    from: email,  // Email pengirim
    to: 'emailtu@gmail.com',  // Ganti dengan alamat email tujuan
    subject: `Pesan dari ${name}`,  // Subjek email
    text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`  // Isi email
  };

  // Mengirim email menggunakan Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Terjadi kesalahan pengiriman email.' });
    }
    // Jika berhasil, kirimkan response sukses
    res.status(200).json({ message: 'Pesan terkirim dengan sukses!' });
  });
});

module.exports = router;
