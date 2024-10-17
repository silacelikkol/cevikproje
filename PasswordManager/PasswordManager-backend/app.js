const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');       // Kullanıcı kimlik doğrulama rotaları
const passwordRoutes = require('./routes/password'); // Şifre yönetim rotaları

const app = express();  // Express uygulaması başlatılır

// Middleware'ler
app.use(express.json()); // Gelen JSON verilerini parse etmek için

// Veritabanı Bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB bağlantısı başarılı!');
}).catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
});

// Rotalar
/*app.use('/auth', authRoutes);         // Kullanıcı kaydı ve giriş işlemleri
app.use('/passwords', passwordRoutes); // Şifre ekleme, silme, güncelleme işlemleri
*/

// Varsayılan bir rota
app.get('/', (req, res) => {
    res.send('Şifre Yönetimi API\'sine Hoş Geldiniz!');
});

module.exports = app; // Express uygulamasını dışa aktar
