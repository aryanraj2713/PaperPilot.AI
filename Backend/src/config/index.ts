require("dotenv").config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
	/**
	 * Port the app should run on
	 */
	port: parseInt(process.env.PORT!) || 5050,

	/**
	 * Used by Winston logger
	 */
	logs: {
		level: process.env.LOG_LEVEL || "silly",
	},

	awsConfig: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		region: process.env.AWS_REGION,
	},

	/**
	 * API configs
	 */
	api: {
		prefix: "/api",
	},
};
