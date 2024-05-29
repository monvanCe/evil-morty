import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, paddings } from '@/styles/sizes';
import theme from '@/styles/theme';

import { Text, TouchableOpacity, View } from 'react-native';

import { MotiView } from 'moti';

interface IPagination {
  currentPage: number | null;
  totalPages: number | null;
  onPress: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPress }: IPagination) {
  const colors = theme.useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: horizontalScale(paddings.small),
        marginVertical: verticalScale(paddings.small),
      }}>
      {Array.from({ length: totalPages ?? 1 }, (_, i) => i + 1).map((page, index) => (
        <MotiView
          key={index}
          style={{
            borderWidth: borderWidths.small,
            borderRadius: borderRadius.small,
            height: verticalScale(2 * paddings.large),
            aspectRatio: 1,
          }}
          animate={{
            borderColor: currentPage === page ? colors.primary : colors.border,
            borderBottomWidth: currentPage === page ? borderWidths.small : borderWidths.large,
            translateY: currentPage === page ? borderWidths.large - borderWidths.small : 0,
          }}
          transition={{
            type: 'timing',
            duration: 250,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPress(page)}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: colors.primaryText }}>{page}</Text>
          </TouchableOpacity>
        </MotiView>
      ))}
    </View>
  );
}
