import { useAppSelector } from '@/store/store';
import { verticalScale } from '@/styles/metricEngine';

import { Skeleton } from 'moti/skeleton';

export default function EpisodeSkeleton() {
  const appTheme = useAppSelector(state => state.appConfig.appTheme);

  return <Skeleton colorMode={appTheme} width={'100%'} height={verticalScale(50)} />;
}
