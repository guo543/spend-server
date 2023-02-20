import { Request, Response } from "express";

export const signin = async (req: Request, res: Response) => {
    res.send("signin");
}

export const signup = async (req: Request, res: Response) => {
    res.send("signup");
}
