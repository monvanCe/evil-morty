import { IEpisode } from '@/store/types';
import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, margins, paddings } from '@/styles/sizes';
import theme from '@/styles/theme';
import { ITheme } from '@/styles/types';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MotiView } from 'moti';

interface IEpisodeItem {
  item: IEpisode;
  index: number;
  onPress?: () => void;
}

export default function EpisodeItem({ item, index, onPress }: IEpisodeItem) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);
  const [pressed, setPressed] = React.useState<Number | null>(null);

  const animStateHandle = async (index: number) => {
    setPressed(index);
    await new Promise(r => setTimeout(r, 125));
    onPress && onPress();
    setPressed(null);
  };

  return (
    <MotiView
      style={style.container}
      animate={{
        borderBottomWidth: pressed === index ? borderWidths.small : borderWidths.large,
        translateY: pressed === index ? borderWidths.large - borderWidths.small : 0,
        marginBottom: pressed === index ? borderWidths.large - borderWidths.small : 0,
        borderColor: pressed === index ? colors.primary : colors.border,
      }}
      transition={{
        type: 'timing',
        duration: 50,
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={style.button}
        onPress={() => animStateHandle(index)}>
        <Text style={style.text}>{item.name}</Text>
        <View style={style.row}>
          <Text style={{ color: colors.secondaryText }}>{item.episode}</Text>
          <Text style={{ color: colors.tertiaryText }}>{item.airDate}</Text>
        </View>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = (colors: ITheme) => {
  return StyleSheet.create({
    container: {
      borderWidth: borderWidths.small,
      borderRadius: borderRadius.small,
      marginVertical: verticalScale(margins.small),
    },
    text: {
      color: colors.primaryText,
      fontWeight: 'bold',
    },
    button: {
      gap: verticalScale(paddings.small),
      padding: horizontalScale(paddings.small),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
