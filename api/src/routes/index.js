const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Me traigo la data de la API
const data = async () => {
    const arr = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log('Esto me devuelve la API', arr)
}

module.exports = router;
