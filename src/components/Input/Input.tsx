import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Input.Styles';

interface Props {
  placeholder?: string;
  secureTextEntry?: boolean;
  title?: string;
  value: string;
  iconName?: string;
  onChangeText: (text: string) => void;
}

const Input = ({
  placeholder,
  secureTextEntry,
  title,
  value,
  iconName,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.container}>
      {title !== undefined && <Text>{title}</Text>}
      {iconName !== undefined && (
        <Ionicons
          style={styles.inputIcon}
          name={iconName}
          size={24}
          color={'gray'}
        />
      )}
      <TextInput
        style={iconName !== undefined ? styles.inputWithIcon : styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
