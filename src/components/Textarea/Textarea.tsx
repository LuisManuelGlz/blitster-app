import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { FieldError } from 'react-hook-form';
import styles from './Textarea.styles';

interface Props extends TextInputProps {
  name: string;
  error?: FieldError;
}

const Textarea = ({
  style,
  placeholder,
  value,
  error,
  onChangeText,
}: Props) => {
  return (
    <View style={style}>
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          multiline
          numberOfLines={4}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.errorsContainer}>
        {error && <Text style={styles.errorMessage}>{error.message}</Text>}
      </View>
    </View>
  );
};

export default Textarea;
