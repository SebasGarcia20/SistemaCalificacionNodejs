const db = require("../");
const Qualification = db.qualifications;
const Op = db.Sequelize.Op;

// Create and Save a new Qualification
exports.create = (req, res) => {
    // Validate request
    if (!req.body.origen) {
        res.status(400).send({
            message: "La calificación no puede ser vacia"
        });
        return;
    }

    // Create a Tutorial
    const qualification = {
        origen: req.body.origen,
        opinion: req.body.opinion,
        calificacion: req.body.calificacion,
    };

    // Save Tutorial in the database
    Qualification.create(qualification)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha sucedido un error en la creación de la calificación"
            });
        });
};

// Retrieve all Qualifications from the database.
exports.findAll = (req, res) => {

    Qualification.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error al devolver las calificaciones."
            });
        });
};

// Find a single Qualification with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Qualification.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al devolver calificación con el id " + id
            });
        });
};

// Update a Qualification by the id in the request

exports.update = (req, res) => {
    const id = req.params.id;

    Qualification.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La calificación se ha actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la calificación con id = ${id}. No se encontro o esta vacia`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al actualizar la calificación con id " + id
            });
        });
};

// Delete a Qualification with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    Qualification.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Se ha eliminado correctamente la calificación"
                });
            } else {
                res.send({
                    message: `Ha ocurrido un error al eliminar la calificaicón con id ${id}. Revisar si existe`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al eliminar la calificación con id = " + id
            });
        });
};

// Find all Qualifications greater than three
exports.findAllGreaterThanThree = (req, res) => {
    var condition = {
        calificacion: {
            [Op.gt]: 3
        }
    }

    Qualification.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a specify Qualification by specify date
exports.findAllByDate = (req, res) => {
    const date = req.query.date;
    console.log(req.query);
    var condition = {
        createdAt: {
            [Op.like]: `${date}`
        }
    }

    Qualification.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};