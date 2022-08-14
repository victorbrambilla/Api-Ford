import { GetFiltersRepository } from "@/data/protocols/db";
import { Movie } from "@/domain/models";
import { prismaClient } from "../prismaClient";

export class FiltersRepository implements GetFiltersRepository {
  async getFilters(): Promise<GetFiltersRepository.Result> {
    const filtersCollection = prismaClient.getConnection().movies;
    const getFilters = await filtersCollection.findMany();
    let years: string[] = [];
    let genres: string[] = [];
    getFilters.map((filter: Movie) => {
      if (!years.includes(new Date(filter.release_date).getFullYear().toString())) {
        years.push(new Date(filter.release_date).getFullYear().toString());
      }
      if (!genres.includes(filter.genre)) {
        genres.push(filter.genre);
      }
    });
    const FilteredFilters = {
      years: years,
      genres: genres,
    };
    return FilteredFilters;
  }
}
