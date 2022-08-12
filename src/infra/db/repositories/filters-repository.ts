import { GetFiltersRepository } from "@/data/protocols/db";
import { prismaClient } from "../prismaClient";

export class FiltersRepository implements GetFiltersRepository {
  async getFilters(): Promise<GetFiltersRepository.Result> {
    const filtersCollection = prismaClient.getConnection().movies;
    const getFilters = await filtersCollection.findMany();
    let years: string[] = [];
    let genres: string[] = [];
    getFilters.map((filter) => {
      if (!years.includes(filter.release_date)) {
        years.push(filter.release_date);
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
