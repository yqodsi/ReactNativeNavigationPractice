import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  FlatList
} from "react-native";

const NewsBox = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.img_url} />
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
          {props.article}
        </Text>
        <View style={styles.sourceText}>
          <Text
            style={{
              fontFamily: "ubuntu",
              color: "dodgerblue",
              paddingLeft: 10
            }}
          >
            {props.source}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(props.url)}
          >
            <Text style={{ fontFamily: "ubuntu", color: "white" }}>
              Read Article
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    backgroundColor: "#2FDD92",
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  }
});
export default NewsBox;
