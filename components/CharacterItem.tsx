import { useAppSelector } from '@/store/store';
import { ICharacter } from '@/store/types';
import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, margins, paddings, sizes } from '@/styles/sizes';
import theme from '@/styles/theme';
import { ITheme } from '@/styles/types';

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MotiView } from 'moti';

interface ICharacterItem {
  item: ICharacter;
  index: number;
  onPress?: (e: number) => void;
}

export default function CharacterItem({ item, index, onPress }: ICharacterItem) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors, item), [colors]);
  const [isPressed, setIsPressed] = React.useState<boolean>(false);
  const favoriteCharacters = useAppSelector(state => state.character.favoriteCharacters);

  const animStateHandle = async (index: number) => {
    setIsPressed(true);
    await new Promise(r => setTimeout(r, 125));
    onPress && onPress(index);
    setIsPressed(false);
  };

  return (
    <MotiView
      style={[
        style.container,
        {
          backgroundColor: favoriteCharacters.includes(item.id) ? colors.error : colors.background,
        },
      ]}
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
        <View style={style.imageContainer}>
          <Image source={{ uri: item.image }} style={style.image} />
        </View>

        <View style={style.divider} />
        <View style={style.contentContainer}>
          <Text style={{ color: colors.primaryText, fontWeight: 'bold' }}>{item.name}</Text>
          <View style={[style.row, style.spaceBetween]}>
            <View style={style.row}>
              <View style={style.statusDot} />
              <Text style={{ color: colors.secondaryText }}>
                {item.status + ' - ' + item.gender}
              </Text>
            </View>
            <Text style={{ color: colors.tertiaryText }}>{item.species}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = (colors: ITheme, item: ICharacter) => {
  return StyleSheet.create({
    container: {
      borderWidth: borderWidths.small,
      borderRadius: borderRadius.small,
      overflow: 'hidden',
    },
    button: {
      flexDirection: 'row',
    },
    imageContainer: {
      height: '100%',
      aspectRatio: 1,
    },
    contentContainer: {
      gap: verticalScale(paddings.small),
      padding: horizontalScale(paddings.small),
      flex: 1,
    },
    image: { height: '100%', width: '100%', objectFit: 'contain' },
    divider: {
      width: 1,
      backgroundColor: colors.border,
    },
    statusDot: {
      height: sizes.small,
      aspectRatio: 1,
      backgroundColor:
        item.status === 'Alive'
          ? colors.success
          : item.status === 'Dead'
            ? colors.error
            : colors.border,
      borderRadius: borderRadius.small,
      marginRight: horizontalScale(margins.small),
    },
    row: {
      flexDirection: 'row',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
  });
};
