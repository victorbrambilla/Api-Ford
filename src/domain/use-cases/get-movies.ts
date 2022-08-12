import { Movie } from "../models";

export interface GetMovies {
  perform: (params: GetMovies.Params) => Promise<GetMovies.Result>;
}

export namespace GetMovies {
  export type Params = {
    filter: {
      years: string[];
      genres: string[];
    };
  };
  export type Result = Movie[];
}
