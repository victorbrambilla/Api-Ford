import { getFiltersController } from "@/presentation/controllers/get-filters-controller";
import { makeDbGetFilters } from "../use-cases";

export const makeDbGetFiltersController = () => {
  const controller = new getFiltersController(makeDbGetFilters());
  return controller;
};
