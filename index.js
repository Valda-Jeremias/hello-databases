const express  = require('express'); //npm i express
const mongoose = require('mongoose'); //npm i mongoose
const cors     = require('cors'); //npm i cord

//Rutas
const router = require('./routes/api/user');

// puerto y conexion a la base de datos
const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

//Utilizacion de un metodo de express
const app = express();
app.use(cors());

// conexion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
.catch(err => console.error(`Connection error ${err}`));
app.use('/api', router);

// el server escucha todo
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log('Anti COPY&PASTE');
});

