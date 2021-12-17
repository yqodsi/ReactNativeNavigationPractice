import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsBox from "../components/NewsBox.js";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("NewsBox")}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  let [fontLoaded, error] = useFonts({});
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewsBox" component={NewsBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default App;
