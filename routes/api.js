const router = require('express').Router();

const middlewares = require('./middlewares');
const apiUsersRouter = require('./api/users');
const apiCustomersRouter = require('./api/customers');
const apiProvidersRouter = require('./api/providers');

router.use('/users',apiUsersRouter);
router.use('/customers', middlewares.checkToken,apiCustomersRouter);
router.use('/providers', apiProvidersRouter);

module.exports = router;