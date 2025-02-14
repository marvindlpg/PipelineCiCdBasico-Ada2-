const express = require ('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app =  express(); 

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Ada - Proceso de Selección Ing. DevOps OK'); 
}); 




app.listen (3001, () => {
   console.log('Servidor runners');
});

