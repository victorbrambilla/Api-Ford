export type Movie = {
  movie_title: string;
  release_date: string;
  genre: string;
  total_gross?: number | null;
  inflation_adjusted_gross?: number | null;
};
