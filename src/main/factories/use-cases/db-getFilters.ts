import { DbGetFilters } from "@/data/use-cases";
import { FiltersRepository } from "@/infra/db/repositories/filters-repository";

export const makeDbGetFilters = (): DbGetFilters => {
  const filtersRepository = new FiltersRepository();
  return new DbGetFilters(filtersRepository);
};
