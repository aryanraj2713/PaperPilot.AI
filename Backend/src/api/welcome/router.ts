import { Request, Response, Router } from "express";

const welcomeRouter = Router();

const handleWelcome = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the Paperpilot!" });
};

welcomeRouter.get("/", handleWelcome);
export default welcomeRouter;
