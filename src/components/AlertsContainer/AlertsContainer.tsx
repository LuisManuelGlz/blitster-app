import React from 'react';
import { View } from 'react-native';
import styles from './AlertsContainer.styles';
import Alert from '../Alert';
import { useTypedSelector } from '../../redux';

const AlertContainer = () => {
  const alerts = useTypedSelector((store) => store.alert.alerts);

  return (
    <View style={styles.container}>
      {alerts.map((alert: { id: string; message: string }) => (
        <Alert.Error key={alert.id} id={alert.id} message={alert.message} />
      ))}
    </View>
  );
};

export default AlertContainer;
