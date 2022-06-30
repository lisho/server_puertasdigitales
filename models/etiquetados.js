

module.exports = (sequelize, type) => {

    return sequelize.define("etiquetado", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
              
    })

}

