import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ModeButton = ({ mode, currentMode, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(mode)}
    accessibilityLabel={`Switch to ${mode} mode`}
    accessibilityRole="button"
  >
    <Text style={[styles.modeText, currentMode === mode && styles.activeModeText]}>
      {mode.charAt(0).toUpperCase() + mode.slice(1)}
    </Text>
  </TouchableOpacity>
);

const Navbar = ({ currentMode, setCurrentMode }) => {
  return (
    <View style={styles.navbar}>
      {['standard', 'scientific', 'programmer'].map((mode) => (
        <ModeButton
          key={mode}
          mode={mode}
          currentMode={currentMode}
          onPress={setCurrentMode}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#125DEB',
    height: 70,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  activeModeText: {
    color: 'yellow',
    borderBottomColor: 'yellow',
    borderBottomWidth: 2,
  },
});

export default Navbar;
