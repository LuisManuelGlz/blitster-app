import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './AlertsContainer.styles';
import Alert from '../Alert';
import { RootState } from 'src/redux/reducers';

const AlertContainer = ({ alerts }: any) => {
  return (
    <View style={styles.container}>
      {alerts.map((alert: { id: string; message: string }) => (
        <Alert.Error key={alert.id} id={alert.id} message={alert.message} />
      ))}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertContainer);
