import { GetMovies } from "@/domain/use-cases";
import { GetMoviesRepository } from "../protocols/db";

export class DbGetMovies implements GetMovies {
  constructor(private readonly getMoviesRepository: GetMoviesRepository) {}

  async perform(params: GetMovies.Params): Promise<GetMovies.Result> {
    const movies = await this.getMoviesRepository.getMovies(params);
    return movies;
  }
}
