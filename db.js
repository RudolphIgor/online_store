//Файл работы с БД (подключение и тд)
const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		dialect: 'mysql',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	}
)
