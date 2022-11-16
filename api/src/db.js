require('dotenv').config();  // para traer del .env se instala con npm.
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_PORT,
} = process.env;
//console.log('esto es process.env',process.env) // remove this after you've confirmed it is working
//console.log('esto es DB_USER:',DB_USER) // remove this after you've confirmed it is working


// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/pokemon`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Pokemon, Type } = sequelize.models; // lo destructuro para poder hacer uso de la relacion
// Aca vendrian las relaciones
// el segundo argumento es opcional y sirve para nombrar a la join table (C)
Pokemon.belongsToMany(Type, { through : 'pokemon-types'});
Type.belongsToMany(Pokemon, { through : 'pokemon-types'});


module.exports = {
  ...sequelize.models, // del otro lado para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importarte la conexión { conn } = require('./db.js'); la usamos en index.js
};
