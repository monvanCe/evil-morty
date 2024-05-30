import { IEpisode } from '@/store/types';
import { horizontalScale, moderateScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, fontSizes, paddings } from '@/styles/sizes';
import theme from '@/styles/theme';
import { ITheme } from '@/styles/types';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';

interface IEpisodeItem {
  item: IEpisode;
  index: number;
  onPress?: (e: number) => void;
}

export default function EpisodeItem({ item, index, onPress }: IEpisodeItem) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);
  const [isPressed, setIsPressed] = React.useState<boolean>(false);

  const animStateHandle = async (index: number) => {
    setIsPressed(true);
    await new Promise(r => setTimeout(r, 125));
    onPress && onPress(index);
    setIsPressed(false);
  };

  return (
    <MotiView
      style={style.container}
      animate={{
        borderBottomWidth: isPressed ? borderWidths.small : borderWidths.large,
        translateY: isPressed ? borderWidths.large - borderWidths.small : 0,
        marginBottom: isPressed
          ? borderWidths.large - borderWidths.small + verticalScale(paddings.small)
          : verticalScale(paddings.small),
        borderColor: isPressed ? colors.primary : colors.border,
      }}
      transition={{
        type: 'timing',
        duration: 50,
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={style.button}
        onPress={() => animStateHandle(index)}>
        <View style={style.contentContainer}>
          <Text style={style.text}>{item.name}</Text>
          <View style={style.row}>
            <Text style={{ color: colors.secondaryText }}>{item.episode}</Text>
            <Text style={{ color: colors.tertiaryText }}>{item.airDate}</Text>
          </View>
        </View>
        <View style={style.divider} />
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingRight: horizontalScale(paddings.small),
          }}>
          <Ionicons
            name='chevron-forward'
            size={moderateScale(fontSizes.medium)}
            color={colors.primaryText}
          />
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
    },
    text: {
      color: colors.primaryText,
      fontWeight: 'bold',
    },
    button: {
      gap: verticalScale(paddings.small),
      flexDirection: 'row',
    },
    contentContainer: {
      gap: verticalScale(paddings.small),
      padding: horizontalScale(paddings.small),
      flex: 1,
    },
    divider: {
      width: 1,
      backgroundColor: colors.border,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
