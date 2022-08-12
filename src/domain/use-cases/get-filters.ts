import { Filter } from "../models";

export interface GetFilters {
  perform: () => Promise<GetFilters.Result>;
}

// eslint-disable-next-line no-redeclare
export namespace GetFilters {
  export type Result = Filter;
}
