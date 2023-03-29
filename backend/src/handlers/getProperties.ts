import { Request, Response } from "express";
import prisma from "../db";



export const getProperties = async (reg: Request, res: Response) => {
    const properties = await prisma.property.findMany();
    res.json(properties);
}