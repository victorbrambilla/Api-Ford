import { GetMoviesRepository } from "@/data/protocols/db";
import { prismaClient } from "../prismaClient";

export class MoviesRepository implements GetMoviesRepository {
  async getMovies(params: GetMoviesRepository.params): Promise<GetMoviesRepository.result> {
    const moviesCollection = prismaClient.getConnection().movies;
    const years = params.filter.years;
    const genres = params.filter.genres;
    let movies: GetMoviesRepository.result = [];
    if (years.length === 0 && genres.length === 0) {
      const getMovies = await moviesCollection.findMany();
      movies = getMovies;
    }
    if (years.length > 0 && genres.length === 0) {
      for (const year of years) {
        const getMovies = await moviesCollection.findMany({
          where: {
            release_date: {
              endsWith: year,
            },
          },
        });
        movies = [...movies, ...getMovies];
      }
    }

    if (years.length === 0 && genres.length > 0) {
      for (const genre of genres) {
        const getMovies = await moviesCollection.findMany({
          where: {
            genre: {
              contains: genre,
            },
          },
        });
        movies = [...movies, ...getMovies];
      }
    }

    if (years.length > 0 && genres.length > 0) {
      for (const year of years) {
        for (const genre of genres) {
          const getMovies = await moviesCollection.findMany({
            where: {
              release_date: {
                endsWith: year,
              },
              genre: {
                contains: genre,
              },
            },
          });
          movies = [...movies, ...getMovies];
        }
      }
    }

    return movies;
  }
}
