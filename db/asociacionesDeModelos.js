

function applyExtraSetup(sequelize) {
    console.log(sequelize.models)
	const { puerta,
            user,
            favorito,
            etiqueta,
            etiquetado,
            etiquetaTipo,
            calificacion
     } = sequelize.models;

     user.belongsToMany(puerta, { through: favorito });
     puerta.belongsToMany(user, { through: favorito });

     user.belongsToMany(puerta, { through: calificacion });
     puerta.belongsToMany(user, { through: calificacion });

     etiqueta.belongsToMany(puerta, { through: etiquetado });
     puerta.belongsToMany(etiqueta, { through: etiquetado });

     etiquetaTipo.hasMany(etiqueta);
     etiqueta.belongsTo(etiquetaTipo);
}

module.exports = { applyExtraSetup };