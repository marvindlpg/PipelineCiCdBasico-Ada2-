const router = require('express').Router();
const {check,validationResult} = require('express-validator');
const { body } = require('express-validator');
const { Customer } = require('../../db');

router.get('/', async (req, res) => {
    const customers = await Customer.findAll();
    res.json(customers);
});


    router.post('/',  [
    check('documentCustomer','El numero de documento es obligatorio').not().isEmpty().isNumeric(),
    check('nameCustomer','El nombre del Cliente es obligatorio').not().isEmpty(),
    check('addressCustomer','La Dirección del Cliente es obligatorio').not().isEmpty(),
    check('emailCustomer','El Email del Cliente es obligatorio').not().isEmpty(),
    check('emailCustomer','El Email del Cliente es Incorrecto').isEmail(), 
    check('phoneCustomer','El Tamaño Máximo del Phone son "13" caracteres').isLength({max: 13}),
    check('phoneCustomer','El Phone debe ser numérico').isNumeric().isLength({max: 13}),
  
], async (req, res) => {
    

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }  

    const documentCustomer = await Customer.findOne({where: {documentCustomer: req.body.documentCustomer}});
    if (!documentCustomer) {
        
        const customer = await Customer.create(req.body);
        res.json(customer);
    
    }
    else
    {
        res.status(400).json({ error: 'Document Customer ya existe en la bd'});
    }


});



module.exports = router;