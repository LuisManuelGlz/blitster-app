import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { FieldError } from 'react-hook-form';
import styles from './Input.styles';
import { useTypedSelector } from '../../redux';

interface Props extends TextInputProps {
  name: string;
  error?: FieldError;
  iconLeft?: any;
  iconRight?: any;
}

const Input = ({
  style,
  name,
  placeholder,
  value,
  iconLeft,
  iconRight,
  error,
  secureTextEntry,
  onChangeText,
}: Props) => {
  const errorMessages = useTypedSelector(
    (store) => store.validation.errorMessages,
  );

  return (
    <View style={style}>
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        <View style={styles.iconContainer}>{iconLeft}</View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
        <View style={styles.iconContainer}>{iconRight}</View>
      </View>
      <View style={styles.errorsContainer}>
        {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        {errorMessages.map(
          (errorMessage, index) =>
            errorMessage.param === name && (
              <Text key={index} style={styles.errorMessage}>
                {errorMessage.msg}
              </Text>
            ),
        )}
      </View>
    </View>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
