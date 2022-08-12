import { GetFilters } from "@/domain/use-cases";
import { GetFiltersRepository } from "../protocols/db";

export class DbGetFilters implements GetFilters {
  constructor(private readonly getFiltersRepository: GetFiltersRepository) {}

  async perform(): Promise<GetFilters.Result> {
    const filters = await this.getFiltersRepository.getFilters();
    return filters;
  }
}
