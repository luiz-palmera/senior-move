import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.backButton}>
        <Feather name="chevron-left" size={30} color="white" />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
});
