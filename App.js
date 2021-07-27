import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const maxLength = 15;
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const calculator = () => {
    let lastArr = currentNumber[currentNumber.length - 1];

    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+"
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      let result = eval(currentNumber).toString();
      console.log("Result", result);
      setCurrentNumber(result);
      return;
    }
  };

  const handleInput = (btnPress) => {
    if (btnPress === "0") {
      setCurrentNumber("");
    }
    if (currentNumber === "0") {
      setCurrentNumber("");
    }
    if (
      btnPress === "+" ||
      btnPress === "-" ||
      btnPress === "*" ||
      btnPress === "/" ||
      btnPress === "%"
    ) {
      if (
        currentNumber.includes(currentNumber) &&
        currentNumber.includes(btnPress)
      )
        return;

      if (currentNumber.length === 0 && btnPress.includes(currentNumber))
        return;
      setCurrentNumber(currentNumber + btnPress);
      return;
    }
    if (btnPress === "=") {
      setLastNumber(currentNumber + "=");
      calculator();
      return;
    }
    if (btnPress === "DEL") {
      setCurrentNumber("");
      setLastNumber("");
      return;
    }
    setCurrentNumber(currentNumber + btnPress);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textDisplay}>Display</Text>
        <View style={styles.fieldNumber}>
          <TextInput style={styles.lastNumber}>{lastNumber}</TextInput>
          <TextInput maxLength={maxLength} style={styles.currentNumber}>
            {currentNumber}
          </TextInput>
        </View>
      </View>
      <View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.DEL}
            onPress={() => handleInput("DEL")}>
            <Text style={styles.number}>DEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("1")}>
            <Text style={styles.number}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("2")}>
            <Text style={styles.number}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperation}
            onPress={() => handleInput("-")}>
            <Text style={styles.numberOperation}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperation}
            onPress={() => handleInput("+")}>
            <Text style={styles.numberOperation}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("3")}>
            <Text style={styles.number}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("4")}>
            <Text style={styles.number}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperation}
            onPress={() => handleInput("/")}>
            <Text style={styles.numberOperation}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperation}
            onPress={() => handleInput("*")}>
            <Text style={styles.numberOperation}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("5")}>
            <Text style={styles.number}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("6")}>
            <Text style={styles.number}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperation}
            onPress={() => handleInput("%")}>
            <Text style={styles.numberOperation}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperation}
            onPress={() => handleInput("=")}>
            <Text style={styles.numberOperation}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("7")}>
            <Text style={styles.number}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("8")}>
            <Text style={styles.number}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("9")}>
            <Text style={styles.number}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput("0")}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style='auto' backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFA0A0",
    padding: 22,
    height: "100%",
  },
  textDisplay: {
    fontSize: 26,
    color: "#FFF",
    marginLeft: 10,
    paddingLeft: 12,
    marginBottom: 12,
  },
  fieldNumber: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  lastNumber: {
    textAlign: "right",
    fontSize: 14,
    color: "#9fa3ab",
    paddingRight: 5,
  },
  currentNumber: {
    fontSize: 18,
    paddingRight: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  rowButton: {
    flexDirection: "row",
  },
  DEL: {
    width: "100%",
    backgroundColor: "#930707",
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    fontSize: 30,
    backgroundColor: "#FF5757",
    width: 80,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginRight: 15,
  },
  number: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    color: "#FFF",
  },
  buttonOperation: {
    fontSize: 30,
    backgroundColor: "#930707",
    width: 80,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginRight: 15,
  },
  numberOperation: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    color: "#FFF",
  },
});
