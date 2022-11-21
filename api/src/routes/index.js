const { Router, application } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Me traigo la data de la API

//Me voy a tener que haacer un ValidateMiddleware (como el que hizo jorge) para ver si cuando hago las busquedas por ID ese ID es el de la POEKAPI o el de nuestra Base de Datos .

router.use('/', router)


router.get("/pokemons", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log("Esto me devuelve la API en /pokemons:", response);
    res.status(200).json(response.data.results);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/pokemons/:id", (req, res) => {
  let { id } = req.params;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then( response => res.status(200).json(response.data))
  .catch( error => res.status(400).json(error.message))
});

module.exports = router;
