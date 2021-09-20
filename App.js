import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import HeaderTabs from './components/HeaderTabs';

export default props => (
  <SafeAreaView style={styles.AndroidSafeArea} {...props} >
    <HeaderTabs></HeaderTabs>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});