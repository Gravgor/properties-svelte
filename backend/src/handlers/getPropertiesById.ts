import { Request, Response } from "express";
import prisma from "../db";



export const getPropertiesById = async (reg: Request, res: Response) => {
    const { id } = reg.params;
    const properties = await prisma.property.findUnique({
        where: {
            id: Number(id)
        }
    });
    if(!properties) {
        res.status(404).json({message: 'Property not found'})
    } else {
        res.json(properties);
    }
}