import { GetFilters, GetMovies } from "@/domain/use-cases";
import { InvalidParametersError } from "@/presentation/errors";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";

export class getMoviesControllers implements Controller {
  constructor(private readonly getMovies: GetMovies, private readonly getFilters: GetFilters) {}

  async handle(request: GetMoviesControllers.Request): Promise<any> {
    try {
      const filters = await this.getFilters.perform();
      const genres = request.filter.genre;
      const years = request.filter.years;
      for (let year of years) {
        if (!filters.years.includes(year)) {
          return HttpHelper.INVALID_PARAMETERS(new InvalidParametersError(`Invalid year: ${year}`));
        }
      }

      for (let genre of genres) {
        if (!filters.genres.includes(genre)) {
          return HttpHelper.INVALID_PARAMETERS(new InvalidParametersError(`Invalid genre: ${genre}`));
        }
      }
      const movies = await this.getMovies.perform({
        filter: {
          genres: genres,
          years: years,
        },
      });
      if (movies.length === 0) {
        return HttpHelper.BAD_REQUEST(new Error("No movies found"));
      }
      return HttpHelper.OK(movies, "Movies received");
    } catch (error) {
      return HttpHelper.SERVER_ERROR(error as Error);
    }
  }
}

export namespace GetMoviesControllers {
  export type Request = {
    filter: {
      genre: string[];
      years: string[];
    };
  };
}
