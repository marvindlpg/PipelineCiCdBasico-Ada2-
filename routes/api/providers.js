const router = require('express').Router();
const {check,validationResult} = require('express-validator');
const { body } = require('express-validator');
const { Provider } = require('../../db');

router.get('/', async (req, res) => {
    const providers = await Provider.findAll();
    res.json(providers);
});


router.get('/:providerId', async (req, res) => {

    const Id= await Provider.findOne({where: {id: req.params.providerId}});
    if (Id) {

      const providers = await Provider.findAll({
      where : { id: req.params.providerId}   
      });
      res.status(200).json(providers);
    }
    else
    {
        res.status(400).json({ error: 'Id no existe en la bd'});
       
    }
});



router.post('/',  [
    check('documentProvider','El numero de documento es obligatorio').not().isEmpty().isNumeric(),
    check('nameProvider','El nombre del Proveedor es obligatorio').not().isEmpty(),
    check('addressProvider','La Dirección del Proveedor es obligatorio').not().isEmpty(),
    check('emailProvider','El Email del Proveedor es obligatorio').not().isEmpty(),
    check('emailProvider','El Email del Proveedor es Incorrecto').isEmail(), 
    check('phoneProvider','El Tamaño Máximo del Phone son "13" caracteres').isLength({max: 13}),
    check('phoneProvider','El Phone debe ser numérico').isNumeric().isLength({max: 13}),
  
], async (req, res) => {
    

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }  

    const documentProvider = await Provider.findOne({where: {documentProvider: req.body.documentProvider}});
    if (!documentProvider) {
        
        const provider = await Provider.create(req.body);
        res.json(provider);
    
    }
    else
    {
        res.status(400).json({ error: 'Document Provider ya existe en la bd'});
    }


});


router.put('/:providerId', async (req, res) => {

        const Id= await Provider.findOne({where: {id: req.params.providerId}});
        if (Id) {

          const providers = await Provider.update(req.body, {
          where : { id: req.params.providerId}   
          });
          res.status(200).json( {success: 'Provider Se ha modificado'} );
        }
        else
        {
            res.status(400).json({ error: 'Id no existe en la bd'});
           
        }
    
});

router.delete('/:providerId',async (req, res) => {   
    const identification = req.params.providerId;    
    
    if(identification)
    {
        const Id= await Provider.findOne({where: {id: req.params.providerId}});
        if (Id) {     
            await Provider.destroy({
                where : { id: req.params.providerId}   
            });  
        
            res.status(200).json( {success: 'Deleted Provider'} );
        }
        else
        {
            res.status(400).json({ error: 'Id no existe en la bd'});
        } 
    
    }else 
    {
    res.status(404).send("Sorry, we cannot find that!"); 
    }
    
    });



module.exports = router;