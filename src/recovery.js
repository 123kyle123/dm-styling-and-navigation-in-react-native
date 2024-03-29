import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../assets/logo1.png";
import { TextInput } from "react-native-paper";
function RecoveryScreen(props) {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E9F679",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.rest}>RESET PASSWORD</Text>
      <TextInput
        style={styles.passl}
        label="Email address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.reset}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SEND RESET CODE
      </Button>
      <Text
        style={styles.back}
        onPress={() => props.navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    color: "#346473",
    fontSize: 10,
  },
  reset: {
    height: 50,
    width: 150,
    marginTop: 15,
    backgroundColor: "#9BDF46",
  },
  logo: {
    height: 200,
    width: 200,
  },
  login: {
    width: "50%",
  },
  passl: {
    marginTop: 10,
    height: 40,
    width: "50%"
  },
  forgot: {
    color: "red",
    fontSize: 10,
    textAlign: "right",
  },
  rest: {
    color: "black",
    fontSize: 30,
    fontWeight: "1000",
  },
});

export default RecoveryScreen;