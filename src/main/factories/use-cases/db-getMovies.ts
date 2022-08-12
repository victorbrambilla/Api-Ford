import { DbGetMovies } from "@/data/use-cases";
import { MoviesRepository } from "@/infra/db/repositories/movies-repository";

export const makeDbGetMovies = (): DbGetMovies => {
  const moviesRepository = new MoviesRepository();
  return new DbGetMovies(moviesRepository);
};
