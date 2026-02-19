import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        mode="parallax"
        defaultIndex={1}
        style={{
          width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale: 0.9,
        }}
      />
    </View>
  );
};

export default MainSlideshow;
