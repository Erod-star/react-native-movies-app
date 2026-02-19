import { movieApi } from '@/core/api/movie-api';
import { MovieDBMovieDetailsResponse } from '@/infrastructure/interfaces/moveidb-movie-details';
import { MovieDetails } from '@/infrastructure/interfaces/movie.interface';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (
  id: string | number,
): Promise<MovieDetails> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieDetailsResponse>(`/${id}`);
    const movie = MovieMapper.fromTheMovieDBToMovieDetails(data);

    return movie;
  } catch (error) {
    console.error(error);
    throw `Cannot load details for the movie with the id - ${id}`;
  }
};
