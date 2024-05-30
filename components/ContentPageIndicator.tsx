import { horizontalScale, verticalScale } from '@/styles/metricEngine';
import { paddings } from '@/styles/sizes';
import theme from '@/styles/theme';

import { View } from 'react-native';

export default function ContentPageIndicator({ page }: { page: number }) {
  const colors = theme.useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: horizontalScale(paddings.small),
      }}>
      {Array.from({ length: 2 }, (_, index) => {
        return (
          <View
            key={index}
            style={{
              height: paddings.small,
              aspectRatio: 1,
              backgroundColor: index === page ? colors.primary : colors.border,
              borderRadius: 100,
              marginVertical: verticalScale(paddings.small),
            }}
          />
        );
      })}
    </View>
  );
}
