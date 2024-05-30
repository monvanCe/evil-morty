import CharacterItem from '@/components/CharacterItem';
import CharacterSkeleton from '@/components/SkeletonItem';
import { toggleFavoriteCharacter } from '@/store/actions/characterActions';
import { useAppSelector } from '@/store/store';
import { horizontalScale } from '@/styles/metricEngine';
import { paddings } from '@/styles/sizes';
import { status } from '@/utils/enums';

import React from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

export default function EpisodesContent() {
  const character = useAppSelector(state => state.character);
  const { searchTerm, characters, characterStatus } = character;

  const filteredCharacters = React.useMemo(() => {
    return characters.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.origin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [characters, searchTerm]);

  return (
    <>
      {characterStatus === status.Loading ? (
        <>
          {Array.from({ length: 15 }, (_, index) => (
            <View key={index} style={{ padding: horizontalScale(paddings.small) }}>
              <CharacterSkeleton />
            </View>
          ))}
        </>
      ) : (
        <FlashList
          data={filteredCharacters}
          contentContainerStyle={{
            paddingHorizontal: horizontalScale(paddings.small),
          }}
          estimatedItemSize={50}
          renderItem={({ item, index }) => (
            <CharacterItem
              item={item}
              index={index}
              onPress={e => toggleFavoriteCharacter(characters[index].id)}
            />
          )}
        />
      )}
    </>
  );
}
