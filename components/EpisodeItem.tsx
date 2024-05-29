import { IEpisode } from '@/store/types';
import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, paddings } from '@/styles/sizes';
import theme from '@/styles/theme';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { MotiView } from 'moti';

interface IEpisodeItem {
  item: IEpisode;
  index: number;
  onPress?: () => void;
}

export default function EpisodeItem({ item, index, onPress }: IEpisodeItem) {
  const colors = theme.useTheme();
  const [pressed, setPressed] = React.useState<Number | null>(null);

  const animStateHandle = async (index: number) => {
    setPressed(index);
    await new Promise(r => setTimeout(r, 125));
    onPress && onPress();
    setPressed(null);
  };

  return (
    <MotiView
      style={{
        borderWidth: borderWidths.small,
        borderColor: colors.border,
        borderRadius: borderRadius.small,
      }}
      animate={{
        borderBottomWidth: pressed === index ? borderWidths.small : borderWidths.large,
        translateY: pressed === index ? borderWidths.large - borderWidths.small : 0,
        marginBottom: pressed === index ? borderWidths.large - borderWidths.small : 0,
      }}
      transition={{
        type: 'timing',
        duration: 50,
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{ gap: verticalScale(paddings.small), padding: horizontalScale(paddings.small) }}
        onPress={() => animStateHandle(index)}>
        <Text style={{ color: colors.primaryText }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: colors.secondaryText }}>{item.episode}</Text>
          <Text style={{ color: colors.tertiaryText }}>{item.airDate}</Text>
        </View>
      </TouchableOpacity>
    </MotiView>
  );
}
