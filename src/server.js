require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = 3001;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});