const {Sequelize} = require('sequelize');
const { applyExtraSetup } = require('./asociacionesDeModelos');

/* Traemos los modelos (modelo = tabla) */
 /* const CiudadanoModel = require("../models/ciudadanos");
 const ApoyoModel = require("../models/apoyos");
 const CitaModel = require("../models/citas");
 const EstadoCitaModel = require("../models/estados_cita");
 const ParticipacionModel = require("../models/participaciones");
 const PerfilesProfesionalModel = require("../models/perfiles_profesional");
 const PerfilesUsuarioModel = require("../models/perfiles_usuario");
 const PuntoAtencionrModel = require("../models/puntos_atencion");
 const SesionModel = require("../models/sesiones");
 const TipoApoyoModel = require("../models/tipos_apoyo");*/
 const UserModel = require("../models/users"); 
 const PuertaModel = require("../models/puertas");
 const FavoritoModel = require("../models/favoritos");
 const CalificacionModel = require("../models/calificaciones");
 const EiquetaModel = require("../models/etiquetas"); 
 const EtiquetaTipoModel = require("../models/etiquetaTipos");
 const EtiquetadoModel = require("../models/etiquetados");

/* Creamos la base de datos
    Parametros de Sequalize: nombre de la bd, usuario, contraseña y un objeto con:
    - host, 
    - dialect (mariadb)
*/
const sequelize = new Sequelize ("almacenpuertas", "lisho", "toor", {
    host: "db",
    dialect: "mariadb"
});

/* Creamos las tablas */

/* const Ciudadano = CiudadanoModel(sequelize, Sequelize);
const Apoyo = ApoyoModel(sequelize, Sequelize);
const Cita = CitaModel(sequelize, Sequelize);
const EstadoCita = EstadoCitaModel(sequelize, Sequelize);
const Participacion = ParticipacionModel(sequelize, Sequelize);
const PerfilProfesional = PerfilesProfesionalModel(sequelize, Sequelize);
const PerfilUsuario = PerfilesUsuarioModel(sequelize, Sequelize);
const PuntoAtencion = PuntoAtencionrModel(sequelize, Sequelize);
const Sesion = SesionModel(sequelize, Sequelize);
const TipoApoyo = TipoApoyoModel(sequelize, Sequelize);*/
const User = UserModel(sequelize, Sequelize); 
const Puerta = PuertaModel(sequelize, Sequelize);
const Favorito = FavoritoModel(sequelize, Sequelize);
const Calificacion = CalificacionModel(sequelize, Sequelize);
const Etiqueta = EiquetaModel(sequelize, Sequelize); 
const EtiquetaTipo = EtiquetaTipoModel(sequelize, Sequelize);
const Etiquetado = EtiquetadoModel(sequelize, Sequelize);


/* Establecemos las relaciones entre las tablas */

applyExtraSetup(sequelize);

/* Sincronizamos las tablas con la base de datos (y devuelve una promesa)*/

sequelize.sync({force: false})
    .then(()=> {
        console.log("Tablas sincronizadas")
    })

 /* Exportamos los objetos que vamos a necesitar */   

 module.exports = {
    sequelize, Puerta, User, Favorito, Etiqueta, EtiquetaTipo, Etiquetado, Calificacion }
