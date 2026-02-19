import { Cast } from '@/infrastructure/interfaces/cast.interface';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
  cast: Cast[];
  className?: string;
}

const MovieCast = ({ cast, className }: Props) => {
  return (
    <View className={className}>
      <Text className="font-bold text-xl mx-5 mb-2">Elenco</Text>
      <FlatList
        data={cast}
        horizontal
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
