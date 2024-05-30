import CharacterItem from '@/components/CharacterItem';
import DeleteAlert from '@/components/DeleteAlert';
import { useAppSelector } from '@/store/store';
import { horizontalScale } from '@/styles/metricEngine';
import { margins, paddings } from '@/styles/sizes';
import theme from '@/styles/theme';

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function Favorites() {
  const colors = theme.useTheme();
  const favoriteCharacters = useAppSelector(state => state.character.favoriteCharacters);

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        paddingHorizontal: horizontalScale(paddings.small),
      }}>
      <FlashList
        data={favoriteCharacters}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <CharacterItem item={item} index={index} />
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                DeleteAlert(item);
              }}
              style={{
                marginHorizontal: horizontalScale(margins.small),
              }}>
              <Ionicons name='trash' size={24} color='red' />
            </TouchableOpacity>
          </View>
        )}
        estimatedItemSize={10}
      />
    </View>
  );
}
