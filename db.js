const Sequelize = require ('sequelize');

const UserModel = require('./models/users');
const CustomerModel = require('./models/customers');
const ProviderModel = require('./models/providers');

/*
const sequelize = new  Sequelize('utb', 'root', '' , {
    host: 'localhost',
    dialect: 'mysql'
});
*/

const sequelize = new  Sequelize('delconsas_ada-test', 'delconsas_admin25', 'Proceso2025$' , {
    host: 'www.delconsas.com.co',
    dialect: 'mysql'
});


const User = UserModel(sequelize, Sequelize);
const Customer = CustomerModel(sequelize, Sequelize);
const Provider = ProviderModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas Sincronizadas')
})

module.exports = {
    User,
    Customer,
    Provider
}