module.exports = (sequelize, Sequelize) => {
	const users = sequelize.define('users', {
		username: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		}
	});

	return users;
};
