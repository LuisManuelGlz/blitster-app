import React from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle } from 'react-native';
import { FieldError } from 'react-hook-form';
import styles from './Textarea.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  placeholder?: string;
  value?: string;
  error?: FieldError;
  onChangeText?: (text: string) => void;
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
        <Text style={styles.errorMessage}>{error && error.message}</Text>
      </View>
    </View>
  );
};

export default Textarea;
