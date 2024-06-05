import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './Calculator/Navbar';
import Body from './Calculator/Body';


const App = () => {
  const [currentMode, setCurrentMode] = useState('standard');

  return (
    <View style={styles.container}>
      <Navbar setCurrentMode={setCurrentMode} />
      <Body currentMode={currentMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
});

export default App;
