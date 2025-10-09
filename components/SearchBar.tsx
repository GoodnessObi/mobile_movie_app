import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { TextInput, View } from 'react-native';

type SearchBarProps = {
  onPress: () => void;
  placeholder: string;
};

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className="flex flex-row items-center overflow-hidden rounded-full bg-dark-200 px-5 py-4">
      <FontAwesome name="search" size={16} color="#AB8BFF" />
      <TextInput
        onPressIn={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={'#a8b5db'}
        className="ml-2 flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
