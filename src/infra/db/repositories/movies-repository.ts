import { GetMoviesRepository } from "@/data/protocols/db";
import { prismaClient } from "../prismaClient";

export class MoviesRepository implements GetMoviesRepository {
  async getMovies(params: GetMoviesRepository.params): Promise<GetMoviesRepository.result> {
    const moviesCollection = prismaClient.getConnection().movies;
    const getMovies = await moviesCollection.findMany({
      where: {
        genre: {
          in: params.filter.genres,
        },
        release_date: {
          in: params.filter.years,
        },
      },
    });
    return getMovies;
  }
}
