import { MovieDBMovieDetailsResponse } from '../interfaces/moveidb-movie-details';
import { Movie, MovieDetails } from '../interfaces/movie.interface';
import { Result } from '../interfaces/moviedb-response';

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };

  static fromTheMovieDBToMovieDetails = (
    movie: MovieDBMovieDetailsResponse,
  ): MovieDetails => {
    return {
      ...this.fromTheMovieDBToMovie(movie as unknown as Result),
      rating: movie.vote_average,
      budget: movie.budget,
      duration: movie.runtime,
      generes: movie.genres.map((genere) => genere.name),
      originalTitle: movie.original_title,
      productionCompaies: movie.production_companies.map((c) => c.name),
    };
  };
}
