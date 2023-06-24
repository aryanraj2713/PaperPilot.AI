import { Router } from "express";
import predictRouter from "./predict/router";
import welcomeRouter from "./welcome/router";

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use("/", welcomeRouter);
  return app;
};
