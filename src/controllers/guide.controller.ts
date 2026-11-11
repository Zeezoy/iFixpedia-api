import type {Request, Response } from "express";

const guides = [
    {id: 1, title: "Cara mengosongkan cache HP", category: "HP" },
    {id: 2, title:"Mengatur tinta printer", category: "Printer"},
    {id: 3, title: "Laptop tidak merespons", category: "Laptop"}
];

export const getAllGuides = (req: Request, res: Response) => {
    res.status(200).json(guides)
};

export const getGuideById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const guide = guides.find((item) => item.id === id);
    if (!guide){
        res.status(404).json({ message: "Petunjuk tidak ditemukan" });
        return;
    }

    res.status(200).json(guide);
};
