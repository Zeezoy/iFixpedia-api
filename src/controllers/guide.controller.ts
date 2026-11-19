import type {Request, Response} from "express";
import * as guideService from "../services/guide.service.js";

export const getAllGuides = async (req: Request, res: Response) => {
    try {
        const guides = await guideService.getAllGuides();
        res.status(200).json(guides);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server"});
    }
};

export const getGuideById = async (req: Request, res: Response) => {
    try{
        const id = Number(req.params.id);
        const guide = await guideService.getGuideById(id);

        if(!guide){
            res.status(404).json({ message: "Petunjuk tidak ditemukan" });
            return; 
        }
        
        res.status(200).json(guide);    
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server"});
    }
};

export const createGuide = async (req: Request, res: Response) => {
    try{
        const { title, category } = req.body ?? {};

        if (typeof title !== "string" || title.trim() === "" || title.length > 150) {
            res.status(400).json({message: "title wajib berupa teks 1-150 karakter"});
            return; 
        }

        if (typeof category !== "string" || category.trim() === "" || category.length > 50){
            res.status(400).json({message: "category wajib berupa teks 1-50 karakter"});
            return;
        }
        
        const guide = await guideService.createguide(title, category);
        
        res.status(201).json(guide);    
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server"});
    }
};
