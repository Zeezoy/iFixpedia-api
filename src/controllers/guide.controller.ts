// guide.controller.ts  (bagian HTTP)
//   1. Impor tipe Request dan Response, dan impor service
//   2. getAllGuides: minta daftar ke service, balas 200
//   3. getGuideById:
//        a. ambil id dari req.params, ubah jadi angka
//        b. minta ke service
//        c. kalau tidak ada: balas 404 + STOP
//        d. kalau ada: balas 200

import type {Request, Response} from "express";
import * as guideService from "../services/guide.service.js";

export const getAllGuides = (req: Request, res: Response) => {
    const guides = guideService.getAllGuides();
    res.status(200).json(guides);
};

export const getGuideById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const guide = guideService.getGuideById(id);

    if(!guide){
        res.status(404).json({ message: "Petunjuk tidak ditemukan" });
    }

    res.status(200).json(guide);
};
