import { getMoviesControllers } from "@/presentation/controllers/get-movies-controller/get-movies-controller";
import { makeDbGetFilters, makeDbGetMovies } from "../use-cases";

export const makeDbGetMoviesController = () => {
  const controller = new getMoviesControllers(makeDbGetMovies(), makeDbGetFilters());
  return controller;
};
