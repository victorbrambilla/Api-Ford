import { Router } from "express";
import { expressRouterAdapter } from "../adapters";
import { makeDbGetFiltersController, makeDbGetMoviesController } from "../factories/controller";

const moviesRoutes = Router();

moviesRoutes.get("/movies", expressRouterAdapter(makeDbGetMoviesController()));
moviesRoutes.get("/filters", expressRouterAdapter(makeDbGetFiltersController()));

export { moviesRoutes };
