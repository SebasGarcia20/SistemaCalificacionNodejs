module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "testdb",
    dialect: "mysql",
    //sequelize
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};