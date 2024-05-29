import EpisodeItem from '@/components/EpisodeItem';
import EpisodeSkeleton from '@/components/EpisodeSkeleton';
import { useAppSelector } from '@/store/store';
import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { paddings } from '@/styles/sizes';
import { episodeStatus } from '@/utils/enums';

import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

export default function HomeLayout() {
  const episode = useAppSelector(state => state.episode);
  const { episodes, status } = episode;

  return (
    <>
      {status === episodeStatus.Loading ? (
        <>
          {Array.from({ length: 15 }, (_, index) => (
            <View key={index} style={{ padding: horizontalScale(paddings.small) }}>
              <EpisodeSkeleton />
            </View>
          ))}
        </>
      ) : (
        <FlashList
          data={episodes}
          contentContainerStyle={{
            padding: horizontalScale(paddings.small),
            paddingBottom: verticalScale(2 * paddings.large + 2 * paddings.small),
          }}
          estimatedItemSize={50}
          renderItem={({ item, index }) => <EpisodeItem item={item} index={index} />}
        />
      )}
    </>
  );
}
