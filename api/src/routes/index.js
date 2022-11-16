const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Me traigo la data de la API
// router.get('/', (req,res)=>{
//  res.send('Hola Cruz. Te estaba esperando')

// })

// router.get('/pokemons', async (req,res) => {
//     try {
//         const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
//         console.log('Esto me devuelve la API en /pokemons:' , response)
//         res.status(200).json(response)    
//     } catch (error) {
//         res.status(400).json(error)
//     } 
    
// })


module.exports = router;
