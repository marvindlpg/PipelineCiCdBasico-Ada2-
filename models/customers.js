module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        documentCustomer: type.STRING,
        nameCustomer: type.STRING,
        addressCustomer: type.STRING,
        emailCustomer: type.STRING,
        phoneCustomer: type.STRING
    })


}