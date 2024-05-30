import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { borderRadius, borderWidths, paddings, sizes } from '@/styles/sizes';
import theme from '@/styles/theme';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { MotiView } from 'moti';

interface IPagination {
  currentPage: number | null;
  totalPages: number | null;
  onPress: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPress }: IPagination) {
  const colors = theme.useTheme();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {Array.from({ length: totalPages ?? 1 }, (_, i) => i + 1).map((page, index) => (
        <MotiView
          key={index}
          style={{
            borderWidth: borderWidths.small,
            borderRadius: borderRadius.small,
            height: verticalScale(sizes.medium),
            aspectRatio: 1,
            marginHorizontal: horizontalScale(paddings.small / 2),
            marginVertical: 2,
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
    </ScrollView>
  );
}
