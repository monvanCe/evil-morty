import theme from '@/styles/theme';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function AndroidSafeArea(props: any) {
  const color = theme.useTheme();
  return <SafeAreaView style={{ backgroundColor: color.background, paddingTop: 10 }} {...props} />;
}
