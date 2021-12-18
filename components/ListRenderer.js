import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import NewsBox from "../components/NewsBox.js";

function ListRenderer() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://cryptonews-api.com/api/v1/category?section=general&items=50&token=7mp80huutbaii2hei2zbctx2zxpu5g5kmggxwkow",
          {
            method: "GET"
          }
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };

    getArticles();
  }, []);

  return (
    // <NewsBox
    //   source="www.bbc.com"
    //   article="Russia Ukraine: Moscow lists demands for defusing Ukraine tensions"
    //   img_uri="https://picsum.photos/200/300"
    // />
    !isLoading ? (
      <FlatList
        data={data.data}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <NewsBox
            article={item.title}
            url={item.news_url}
            img_url={item.image_url}
            source={item.source_name}
          />
        )}
      />
    ) : (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="dodgerblue" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default ListRenderer;
