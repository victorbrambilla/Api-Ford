import { Router } from "express";

const moviesRoutes = Router();

moviesRoutes.get("/movies", (req, res) => {
  res.send("movies");
});
moviesRoutes.get("/filters", (req, res) => {
  res.send("filters");
});

export { moviesRoutes };
