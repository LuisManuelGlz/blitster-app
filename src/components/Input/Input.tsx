import React from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Input.Styles';

interface Props {
  placeholder?: string;
  title?: string;
  value: string;
  secureTextEntry?: boolean;
  iconName?: string;
  onChangeText: (text: string) => void;
}

const Input = ({
  placeholder,
  value,
  iconName,
  secureTextEntry,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.container}>
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
