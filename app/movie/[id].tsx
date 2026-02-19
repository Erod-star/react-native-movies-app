import MovieCast from '@/presentation/components/movies/MovieCast';
import MovieDescription from '@/presentation/components/movies/MovieDescription';
import MovieHeader from '@/presentation/components/movies/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movie, cast, movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || castQuery.isLoading || !movie || !cast) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-5">Cargando...</Text>
        <ActivityIndicator color="red" size={30} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <MovieHeader
          poster={movie.poster}
          originalTtitle={movie.originalTitle}
          title={movie.title}
        />
        <MovieDescription movie={movie} />
        <MovieCast className="mt-3 pb-5" cast={cast} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
