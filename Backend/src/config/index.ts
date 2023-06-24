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

  /**
   * API configs
   */
  api: {
    prefix: "/api",
  },
};
