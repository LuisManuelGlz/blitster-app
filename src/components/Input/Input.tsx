import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Input.Styles';

interface Props {
  placeholder?: string;
  title?: string;
  value: string;
  secureTextEntry?: boolean;
  iconNameLeft?: string;
  iconNameRight?: string;
  errorMessages?: { msg: string }[];
  onChangeText: (text: string) => void;
}

const Input = ({
  placeholder,
  value,
  iconNameLeft,
  iconNameRight,
  errorMessages,
  secureTextEntry,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.container}>
      {iconNameLeft !== undefined && (
        <Ionicons
          style={styles.inputIconLeft}
          name={iconNameLeft}
          size={24}
          color={'gray'}
        />
      )}
      <TextInput
        style={[
          styles.input,
          iconNameLeft ? styles.inputWithIcon : null,
          errorMessages !== undefined && errorMessages?.length > 0
            ? styles.inputError
            : null,
        ]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
      {iconNameRight !== undefined && iconNameRight !== '' && (
        <Ionicons
          style={styles.inputIconRight}
          name={iconNameRight}
          size={24}
          color={'gray'}
        />
      )}
      {errorMessages?.map((errorMessage, index) => (
        <Text key={index} style={styles.errorMessage}>
          {errorMessage.msg}
        </Text>
      ))}
    </View>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
