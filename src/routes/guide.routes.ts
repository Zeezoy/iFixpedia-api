import { Router } from "express";
import { getAllGuides, getGuideById, createGuide } from "../controllers/guide.controller.js";

const router = Router();

router.get("/", getAllGuides);
router.get("/:id", getGuideById);
router.post("/", createGuide);

export default router;