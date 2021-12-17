import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NewsBox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./azo.jpg")} />
      <View style={styles.text}>
        <Text
          numberOfLines={3}
          style={{
            fontWeight: "700",
            fontSize: 15,
            fontFamily: "ubuntu",
            paddingHorizontal: 10,
            paddingBottom: 3
          }}
        >
          Graham Potter questions Premier League's coronavirus postponement
          stance
        </Text>
        <View style={styles.sourceText}>
          <Text
            style={{
              fontFamily: "ubuntu",
              color: "dodgerblue",
              paddingLeft: 10
            }}
          >
            www.skysport.com
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ fontFamily: "ubuntu" }}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    margin: 10,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 10
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  text: {
    flex: 1,
    // paddingTop: 2,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  sourceText: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "red",
    // paddingHorizontal: 10,
    alignItems: "center"
    // paddingVertical: 20
  },
  button: {
    backgroundColor: "gold",
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});
export default NewsBox;
