import { getMovieByIdAction } from '@/core/actions/movies/get-movie-by-id-action';
import { getMovieCastAction } from '@/core/actions/movies/get-movie-cast-action';
import { useQuery } from '@tanstack/react-query';

export const useMovie = (id: string | number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', 'details', id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const castQuery = useQuery({
    queryKey: ['movie', 'cast', id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  return {
    movieQuery,
    castQuery,
    movie: movieQuery.data,
    cast: castQuery.data,
  };
};
