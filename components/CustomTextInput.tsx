import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, margins, paddings, sizes } from '@/styles/sizes';
import theme from '@/styles/theme';

import React from 'react';
import { TextInput, View } from 'react-native';

import { MotiView } from 'moti';

interface ITextInput {
  searchTerm: string;
  onChange: (text: string) => void;
}

export default function CustomTextInput({ onChange, searchTerm }: ITextInput) {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const colors = theme.useTheme();

  return (
    <MotiView
      style={{
        marginHorizontal: horizontalScale(margins.small),
        paddingHorizontal: horizontalScale(paddings.small),
        borderRadius: borderRadius.small,
        height: verticalScale(1.2 * sizes.medium),
        borderWidth: borderWidths.small,
      }}
      animate={{
        borderColor: isActive ? colors.primary : colors.border,
        borderBottomWidth: isActive ? borderWidths.small : borderWidths.large,
        translateY: isActive ? borderWidths.large - borderWidths.small : 0,
      }}
      transition={{
        type: 'timing',
        duration: 50,
      }}>
      <TextInput
        style={{
          height: '100%',
          width: '100%',
          color: colors.primaryText,
        }}
        placeholderTextColor={colors.tertiaryText}
        selectionColor={colors.primary}
        placeholder='Search...'
        onChange={e => {
          onChange(e.nativeEvent.text);
        }}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={searchTerm}
      />
    </MotiView>
  );
}
