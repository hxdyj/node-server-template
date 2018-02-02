module.exports = {
	appenders: {
		server: {
			type: 'file',
			filename: 'server.log'
		}
	},
	categories: {
		default: {
			appenders: ['server'],
			level: 'trace'
		}
	}
}
