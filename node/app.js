import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import blogRoutes from './routes/route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

//Función asincrónica para conectar a la base de datos
const connectToDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Conexion exitosa a la db');
  } catch (error) {
    console.log(`Error en la db ${error}`);
  }
};

connectToDatabase();

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(8000, () => {
  console.log('Server Up runing in http://localhost:8000/');
});
