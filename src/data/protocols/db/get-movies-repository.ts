import { GetMovies } from "@/domain/use-cases";

export interface GetMoviesRepository {
  getMovies(params: GetMoviesRepository.params): Promise<GetMoviesRepository.result>;
}

export namespace GetMoviesRepository {
  export type params = GetMovies.Params;
  export type result = GetMovies.Result;
}
