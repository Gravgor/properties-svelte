import { Request, Response } from "express";
import prisma from "../db";


export const createProperty = async (req: Request, res: Response) => {
    const { name, description, price, address, city, state, zip, country, bedrooms, bathrooms, sqft, lotSize, yearBuilt,  propertyType, propertyStatus, propertyImage, featured} = req.body;
    const property = await prisma.property.create({
        data: {
            name,
            description,
            price,
            address,
            city,
            state,
            zip,
            country,
            bedrooms,
            bathrooms,
            sqft,
            lotSize,
            yearBuilt,
            propertyType,
            propertyStatus,
            propertyImage,
            featured
        }
    });
    res.json(property);
}

