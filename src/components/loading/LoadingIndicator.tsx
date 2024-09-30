import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Colors} from '../../styles/Colors';
import LogoSmallWhite from '../../assets/images/LogoSmallWhite';

const LoadingIndicator = () => {
  const loading = useSelector((state: RootState) => state.loading.loading);

  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LogoSmallWhite />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BLACK,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default LoadingIndicator;
