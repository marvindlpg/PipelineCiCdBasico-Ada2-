module.exports = (sequelize, type) => {
    return sequelize.define('provider', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        documentProvider: type.STRING,
        nameProvider: type.STRING,
        addressProvider: type.STRING,
        emailProvider: type.STRING,
        phoneProvider: type.STRING
    })


}