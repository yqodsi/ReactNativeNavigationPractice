import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

const NewsBox = () => {
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
            paddingBottom: 7
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
            onPress={console.log("fuk u")}
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
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 10,
    elevation: 3
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
    // padding: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 20,
    borderRadius: 10
  }
});
export default NewsBox;
