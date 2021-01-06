module.exports = (sequelize, Sequelize) => {
    const Qualification = sequelize.define("qualification", {
        origen: {
            type: Sequelize.STRING
        },
        opinion: {
            type: Sequelize.STRING
        },
        calificacion: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW,
            allowNull: false
        }

    });

    return Qualification;
};