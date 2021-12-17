import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsBox from "../components/NewsBox.js";
function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <NewsBox />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5"
  }
});

export default App;
