import React from 'react';
import { View, StyleSheet } from 'react-native';

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderStyle: 'solid',
    width: '100%',
    borderBottomColor: '#E0E0E0', 
    borderBottomWidth: 1, 
    marginTop: 15, 
  },
});

export default Divider;
