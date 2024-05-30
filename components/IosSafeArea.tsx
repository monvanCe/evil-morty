import theme from '@/styles/theme';

import { SafeAreaView } from 'react-native';

export default function IosSafeArea(props: any) {
  const color = theme.useTheme();
  return <SafeAreaView style={{ backgroundColor: color.background }} {...props} />;
}
