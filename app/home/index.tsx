import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (
    nowPlayingQuery.isLoading ||
    popularQuery.isLoading ||
    upcomingQuery.isLoading ||
    topRatedQuery.isLoading
  ) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4">HomeScreen</Text>

        {/* Carrusel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
          className="mb-7"
        />

        {/* Mejores calificadas */}
        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title="Mejores calificadas"
          className="mb-7"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoimng */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-7"
        />
      </View>
    </ScrollView>
  );

  // return (
  //   <SafeAreaView>
  //     <Text>HomeScreen</Text>
  //     <Text>{JSON.stringify(data)}</Text>
  //   </SafeAreaView>
  // );
};

export default HomeScreen;
