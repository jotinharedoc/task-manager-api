const express = require('express');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API rodando');
});

app.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Acesso permitido',
    userId: req.userId
  });
});

module.exports = app;