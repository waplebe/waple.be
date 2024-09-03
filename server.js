const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Сервируем статические файлы
app.use(express.static('public'));

// Основной маршрут
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
