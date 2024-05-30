import { toggleFavoriteCharacter } from '@/store/actions/characterActions';

import { Alert } from 'react-native';

export default function DeleteAlert(item: any) {
  Alert.alert('Delete', `${item.name} isimli karakteri silmek istediğinize emin misiniz?`, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'Delete',
      onPress: () => {
        toggleFavoriteCharacter(item);
      },
    },
  ]);
}
