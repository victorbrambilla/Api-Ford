import { Router } from "express";
import { moviesRoutes } from "../routes";

const router = Router();

router.use(moviesRoutes);
export { router, moviesRoutes };
