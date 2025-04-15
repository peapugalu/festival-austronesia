// server/config/emailConfig.js
require('dotenv').config();

module.exports = {
  service: 'gmail',  // Layanan email menggunakan Gmail
  auth: {
    user: process.env.EMAIL_USER,  // Menggunakan email dari environment variable
    pass: process.env.EMAIL_PASS   // Menggunakan password aplikasi dari environment variable
  }
};
