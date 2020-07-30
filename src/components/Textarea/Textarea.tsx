import React from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle } from 'react-native';
import styles from './Textarea.styles';
import { ErrorMessage } from '../../interfaces/errorMessage';

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  errorMessages?: ErrorMessage[];
  onChangeText: (text: string) => void;
}

const Textarea = ({
  style,
  placeholder,
  value,
  errorMessages,
  onChangeText,
}: Props) => {
  return (
    <View style={style}>
      <View
        style={[
          styles.inputContainer,
          errorMessages && errorMessages.length > 0 ? styles.inputError : null,
        ]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
        />
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

export default Textarea;
