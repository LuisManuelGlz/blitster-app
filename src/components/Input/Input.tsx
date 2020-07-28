import React from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle } from 'react-native';
import styles from './Input.styles';
import { ErrorMessage } from '../../interfaces/errorMessage';

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  iconLeft?: any;
  iconRight?: any;
  errorMessages?: ErrorMessage[];
  onChangeText: (text: string) => void;
}

const Input = ({
  style,
  placeholder,
  value,
  iconLeft,
  iconRight,
  errorMessages,
  secureTextEntry,
  onChangeText,
}: Props) => {
  return (
    <View style={style}>
      <View
        style={[
          styles.inputContainer,
          errorMessages && errorMessages.length > 0 ? styles.inputError : null,
        ]}>
        <View style={styles.iconContainer}>{iconLeft}</View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
        <View style={styles.iconContainer}>{iconRight}</View>
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
