const express = require('express');
const app = express();
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
    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch(error => console.error('Error al conectar:', error));
