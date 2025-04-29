require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/api', usuarioRoutes);

// Conexión y servidor
sequelize.sync()
  .then(() => {
    console.log('Conexión a base de datos exitosa');
    app.listen(port, () => {
      console.log('Servidor corriendo');
    });
  })
  .catch(error => console.error('Error al conectar:', error));
