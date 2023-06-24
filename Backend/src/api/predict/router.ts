import { Request, Response, Router } from "express";
import PredictPapers, { sendPaperToEmail } from "./controller";

const predictRouter = Router();

const handlePredict = async (req: Request, res: Response) => {
	const randomData = await PredictPapers(req.body.interests);

	//store keys of randomData in an array
	const keys = Object.keys(randomData);
	console.log("keys", keys);
	await sendPaperToEmail(req.body.email, keys);
	res.status(200).json({ success: true, data: randomData });
};

predictRouter.post("/", handlePredict);
export default predictRouter;
