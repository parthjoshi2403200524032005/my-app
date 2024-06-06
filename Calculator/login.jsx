
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await response.json();
      if (response.ok) {
        // OTP sent successfully
        setOtp(data.generatedOtp); // Save the OTP for verification
      } else {
        // Handle error response
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleOTPVerification = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, enteredOtp }),
      });
      const data = await response.json();
      if (response.ok) {
        // OTP verification successful
        onLogin();
      } else {
        // Handle error response
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Request OTP</Text>
      </TouchableOpacity>

      {/* OTP Verification Section */}
      {otp && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={enteredOtp}
            onChangeText={setEnteredOtp}
          />
          <TouchableOpacity style={styles.button} onPress={handleOTPVerification}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#1976D2",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#FFF"
  }
});

export default Login;
