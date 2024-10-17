require('dotenv').config(); // .env dosyasındaki ortam değişkenlerini yükle
const app = require('./app'); // app.js dosyasındaki Express uygulamasını al
const port = process.env.PORT || 3000; // Portu ortam değişkeninden al, yoksa 3000'i kullan

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
});
