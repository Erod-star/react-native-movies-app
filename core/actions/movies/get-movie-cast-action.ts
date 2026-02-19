import { movieApi } from '@/core/api/movie-api';
import { Cast } from '@/infrastructure/interfaces/cast.interface';
import { MovieDBCastResponse } from '@/infrastructure/interfaces/moviedb-cast';
import { CastMapper } from '@/infrastructure/mappers/cast.mapper';

export const getMovieCastAction = async (
  id: string | number,
): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCastResponse>(`/${id}/credits`);
    const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity);

    return cast;
  } catch (error) {
    console.error(error);
    throw `Cannot load details for the movie with the id - ${id}`;
  }
};
