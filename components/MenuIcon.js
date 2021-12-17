import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

const MenuIcon = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./azo.jpg")} />
      <View style={styles.text}>
        <Text
          numberOfLines={3}
          style={{
            fontWeight: "700",
            fontSize: 16,
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
    padding: 10,
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 10,
    elevation: 3
  }
});
export default MenuIcon;
