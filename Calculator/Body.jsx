import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Body = ({ currentMode }) => {
  const [input, setInput] = useState("");

  const handleButtonPress = value => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleScientificCalculate = operation => {
    try {
      let result;
      switch (operation) {
        case "sin":
          result = Math.sin(parseFloat(input));
          break;
        case "cos":
          result = Math.cos(parseFloat(input));
          break;
        case "tan":
          result = Math.tan(parseFloat(input));
          break;
        case "log":
          result = Math.log10(parseFloat(input));
          break;
        case "ln":
          result = Math.log(parseFloat(input));
          break;
        case "sqrt":
          result = Math.sqrt(parseFloat(input));
          break;
        default:
          result = "Error";
      }
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleProgrammerCalculate = operation => {
    try {
      let result;
      switch (operation) {
        case "bin":
          result = parseInt(input, 10).toString(2);
          break;
        case "oct":
          result = parseInt(input, 10).toString(8);
          break;
        case "hex":
          result = parseInt(input, 10).toString(16).toUpperCase();
          break;
        default:
          result = "Error";
      }
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const handleDelete = () => {
    setInput(prevInput => prevInput.slice(0, -1));
  };

  const buttons = {
    standard: [
      "C",
      "/",
      "*",
      "⌫",
      "7",
      "8",
      "9",
      "%",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "="
    ],
    scientific: [
      "sin",
      "cos",
      "tan",
      "log",
      "ln",
      "sqrt",
      "(",
      ")",
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "C",
      "0",
      "=",
      "+",
      "%"
    ],
    programmer: [
      "bin",
      "oct",
      "hex",
      "(",
      ")",
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "C",
      "0",
      "+",
      "%",
      "="
    ]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>
        {input}
      </Text>
      <View style={styles.buttonsContainer}>
        {buttons[currentMode].map((buttonValue, index) =>
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              buttonValue === "C" ||
              buttonValue === "*" ||
              buttonValue === "/"
                ? { backgroundColor: "#1DABE0" }
                : {},
              buttonValue === "⌫" ||
              buttonValue === "%" ||
              buttonValue === "+" ||
              buttonValue === "-" ||
              buttonValue === "="
                ? { backgroundColor: "#25CB91" }
                : {},
              buttonValue === "0"
                ? { width: "40%",fontSize: 50,}
                : {}
            ]}
            onPress={() => {
              if (buttonValue === "C") {
                handleClear();
              } else if (buttonValue === "⌫") {
                handleDelete();
              } else if (buttonValue === "=") {
                handleCalculate();
              } else if (
                ["sin", "cos", "tan", "log", "ln", "sqrt"].includes(buttonValue)
              ) {
                handleScientificCalculate(buttonValue);
              } else if (["bin", "oct", "hex"].includes(buttonValue)) {
                handleProgrammerCalculate(buttonValue);
              } else {
                handleButtonPress(buttonValue);
              }
            }}
          >
            <Text
              style={[
                styles.buttonText,
                buttonValue === "C" ? { color: "black" } : {},
                buttonValue === "="
                  ? { fontWeight: "900", fontSize: 35 }
                  : {},
                
              ]}
            >
              {buttonValue}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    top: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    fontSize: 62,
    marginBottom: 20,
    color: "#fff",
    position: "absolute",
    top: 0,
    borderRadius: 10,
    width: "85%", // Adjusted width
    height: 200,
    overflow: "scroll",
    textAlign: "right"
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF"
  }
});

export default Body;
