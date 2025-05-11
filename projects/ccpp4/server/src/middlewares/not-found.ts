import { Request, Response } from "express";

export const notFoundMiddlewware = (req: Request, res: Response) => {
	res.status(404).json({ success: false, message: "Route doesn't exist" });
};
