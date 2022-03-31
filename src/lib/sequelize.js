const { Sequelize } = require("sequelize")
const mySqlConfig = require("../configs/database")

const sequelize = new Sequelize({
    username: mySqlConfig.MYSQL_USERNAME,
    password: mySqlConfig.MYSQL_PASSWORD,
    database: mySqlConfig.MYSQL_DB_NAME,
    port: 3306,
    dialect: "mysql"
})

// Models
const Tag = require("../models/tag")(sequelize)

module.exports = {
    sequelize,
    Tag
}

