import { GetFilters } from "@/domain/use-cases";

export interface GetFiltersRepository {
  getFilters(): Promise<GetFiltersRepository.Result>;
}

export namespace GetFiltersRepository {
  export type Result = GetFilters.Result;
}
