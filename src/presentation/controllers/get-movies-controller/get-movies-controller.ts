import { GetFilters, GetMovies } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";

export class getMoviesControllers implements Controller {
  constructor(private readonly getMovies: GetMovies, private readonly getFilters: GetFilters) {}

  async handle(request: GetMoviesControllers.Request): Promise<any> {
    try {
      const filters = await this.getFilters.perform();
      const genres = request.filters.genre;
      const years = request.filters.year;
      genres.forEach((genre) => {
        if (!filters.genres.includes(genre)) {
          HttpHelper.INVALID_PARAMETERS(new Error("Genre not found"));
          return;
        }
      });
      years.forEach((year) => {
        if (!filters.years.includes(year)) {
          HttpHelper.INVALID_PARAMETERS(new Error("Year not found"));
          return;
        }
      });
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
      return HttpHelper.BAD_REQUEST(error as Error);
    }
  }
}

export namespace GetMoviesControllers {
  export type Request = {
    filters: {
      genre: string[];
      year: string[];
    };
  };
}
