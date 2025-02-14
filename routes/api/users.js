const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const {check,validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/register',  [
    check('username','El nombre de usuario es obligatorio').not().isEmpty(),
    check('password','El Password es obligatorio').not().isEmpty(),
    check('email','El Email debe estar correcto').isEmail()
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }  

    const email = await User.findOne({where: {email: req.body.email}});
    if (!email) {
        req.body.password = bcrypt.hashSync(req.body.password, 10 )
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    else
    {
        res.status(400).json({ error: 'Email ya existe en la bd'});
    }

});


router.post('/login', [
    check('email','El Email debe estar correcto').isEmail(),
    check('password','El Password es obligatorio').not().isEmpty()
    
], async (req, res)=>{

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    } 

    const user = await User.findOne({where: {email: req.body.email}});
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: createToken(user) });
        }else {res.json({ error: 'Error, Password Incorrecto'});
    
              }


    }else{
        res.json({ error: 'Error, Email Incorrecto'});
    }
   
   

});


const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(10, 'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}

module.exports = router;