import { Request, Response, NextFunction } from "express";
import errorClass from "../types/error";

//Error Handling Middleware
export const errorHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = error.message || "Something Wrong Happened";
  res.status(status).json({ success: false, message });
};

//Middleware that handles the request to Not Defined Endpoints
export const lastRoute = (req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Endpoint Not Found" });
};
