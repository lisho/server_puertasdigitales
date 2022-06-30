const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator')
const jwt = require('jwt-simple');
const moment = require('moment');

/** Traemos el modelo */

const { User } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

/* router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
})
 */
router.post('/registro', [
    // Incorporamos validaciones como middelware
    check("username", "Debes introducir un nombre de usuario").not().isEmpty(),
    check("password", "Debes introducir una contraseña válida").not().isEmpty(),
    check("email", "Debes introducir un correo electrónico valido").isEmail()
] ,async (req, res) => {

    // Validamos los datos de la peticción

    const errors = validationResult(req)
   
    if(!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array()})
    }
    /* Encriptamos la contraseña */
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
})

router.post('/login', async (req, res) => {
    console.log("Llega request: ", req);
    const user = await User.findOne({where: {username: req.body.username}});
    
    if (user){
    
        if (bcrypt.compareSync(req.body.password, user.password)){
            const token = createToken(user)
            return res.json({ token: token})
        }else {
            return res.json(user);
        } 
                
    }else{ 
        console.log("no-user")
        res.json({error:"Error en usuario y/o cotraseña"});
       
    }
})


router.put('/:userId', async (req, res) =>{
    await User.update(req.body, {
        where: {id: req.params.userId}
    });
    const users = await User.findAll();
    res.json(users);
})

router.delete('/:userId', async (req, res) =>{
    await User.destroy({
        where: {id: req.params.userId}
    });
    const users = await User.findAll();
    res.json(users);
})


const createToken = (user) =>{
    console.log("user" , user)
    
    const payload = {
        ...user.dataValues,
        createdToken: moment().unix(),
        expiredToken: moment().add(60*12, "minutes").unix(),
    }
    console.log("payload", payload)
    return jwt.encode(payload, "frase secreta")
}
     

module.exports = router;