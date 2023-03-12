const { check } = require('express-validator')
const repo = require('./repository')

module.exports = {

	validateEmail: check('email')

		// To delete leading and triling space
		.trim()

		// Normalizing the email address
		.normalizeEmail()

		// Checking if follow the email
		// address format or not
		.isEmail()

		// Custom message
		.withMessage('Invalid email')

		// Custom validation
		// Validate email in use or not
		.custom(async (email) => {
			const existingUser =
				await repo.getOneBy({ email })
				
			if (existingUser) {
				throw new Error('Email already in use')
			}
		})
}
