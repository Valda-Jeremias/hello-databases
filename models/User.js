const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mail: String,
  birthday: Date
});

//Utilizamos el metodo model habiendo definido previamente que esta en nuestro modelo
const User = mongoose.model('User', UserSchema);

//Exportamos user
module.exports = User;