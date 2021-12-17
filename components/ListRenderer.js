import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View, FlatList } from "react-native";
import NewsBox from "../components/NewsBox.js";
import { createClient } from "pexels";

function ListRenderer() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [img, setImage] = useState([]);

  const getArticles = async () => {
    try {
      const response = await fetch(
        "https://crypto-news6.p.rapidapi.com/news/coindesk",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "crypto-news6.p.rapidapi.com",
            "x-rapidapi-key":
              "547997f5d3mshcbeae02fe149e60p1cdffejsnac2ccd39afca"
          }
        }
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getImg = async () => {
    try {
      const response = await fetch(
        "https://pixabay.com/api/?key=7582783-2ac15da3cf9b8e0efc9dd3615&q=crypto&image_type=photo",
        {
          method: "GET"
        }
      );
      const json = await response.json();
      setImage(json);
      console.log(json.hits[0].pageURL);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImg();
    getArticles();
  }, []);

  return (
    // <NewsBox
    //   source="www.bbc.com"
    //   article="Russia Ukraine: Moscow lists demands for defusing Ukraine tensions"
    //   img_uri="https://picsum.photos/200/300"
    // />
    <FlatList
      data={data.slice(0, 15)}
      initialNumToRender={10}
      renderItem={({ item }) => (
        <NewsBox
          article={item.title}
          url={item.url}
          img_url={json.hits[0].pageURL}
          source={item.source}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ListRenderer;
