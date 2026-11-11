import express from "express";
import type {Request, Response} from "express";
import guideRouter from "./routes/guide.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status:"ok" });
});

app.use("/api/guides", guideRouter)

export default app







