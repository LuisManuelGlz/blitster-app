import React from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Input.Styles';

interface Props {
  style?: StyleProp<ViewStyle>;
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
  style,
  placeholder,
  value,
  iconNameLeft,
  iconNameRight,
  errorMessages,
  secureTextEntry,
  onChangeText,
}: Props) => {
  return (
    <View style={style}>
      <View
        style={[
          styles.inputContainer,
          errorMessages !== undefined && errorMessages.length > 0
            ? styles.inputError
            : null,
        ]}>
        <View style={styles.iconContainer}>
          {iconNameLeft !== undefined && (
            <Ionicons name={iconNameLeft} size={24} color={'gray'} />
          )}
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
        <View style={styles.iconContainer}>
          {iconNameRight !== undefined && iconNameRight !== '' && (
            <Ionicons name={iconNameRight} size={24} color={'gray'} />
          )}
        </View>
      </View>
      <View style={styles.errorsContainer}>
        {errorMessages?.map((errorMessage, index) => (
          <Text key={index} style={styles.errorMessage}>
            {errorMessage.msg}
          </Text>
        ))}
      </View>
    </View>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
