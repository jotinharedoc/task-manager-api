  const express = require('express');
  const cors = require('cors');
  const authRoutes = require('./routes/authRoutes');
  const taskRoutes = require('./routes/taskRoutes');
  const profileRoutes = require('./routes/profileRoutes');

  const app = express();

  app.use(cors());

  app.use(express.json());


  app.use('/auth', authRoutes);
  app.use('/tasks', taskRoutes);
  app.use('/profile', profileRoutes);

  app.get('/', (req, res) => {
    res.send('API rodando');
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Rota não encontrada' });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Erro interno do servidor' });
  });

  module.exports = app;