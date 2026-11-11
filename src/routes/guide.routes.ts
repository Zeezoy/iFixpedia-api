import { Router } from "express";
import { getAllGuides, getGuideById } from "../controllers/guide.controller.js";

const router = Router();

router.get("/", getAllGuides);
router.get("/:id", getGuideById);

export default router;