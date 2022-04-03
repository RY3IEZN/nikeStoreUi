/** @format */

import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen(props) {
  const [trending, setTrending] = useState([
    {
      id: 0,
      name: "Nike Air Zoom Pegasus 36",
      img: require("../../assets/nike-pegasus-36.png"),
      bgColor: "#BF012C",
      type: "RUNNING",
      price: "$186",
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: "Nike Metcon 5",
      img: require("../../assets/nike-metcon-5-black.png"),
      bgColor: "#D39C67",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: "Nike Air Zoom Kobe 1 Proto",
      img: require("../../assets/nike-zoom-kobe-1-protro.png"),
      bgColor: "#7052A0",
      type: "BASKETBALL",
      price: "$199",
      sizes: [6, 7, 8, 9],
    },
  ]);

  const TrendingShoes = (item, index) => {
    return (
      <TouchableOpacity style={styles.trendshoeslist}>
        <Text>{item.type}</Text>
        <View
          style={{
            backgroundColor: item.bgColor,
            justifyContent: "flex-end",
            marginTop: 8,
            flex: 1,
            borderRadius: 10,
            marginRight: 20,
            padding: 10,
          }}
        >
          <View
            style={{
              margin: 10,
              justifyContent: "space-between",
              marginBottom: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>{item.name}</Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>
              {item.price}
            </Text>
          </View>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: -20,
              right: -50,
              bottom: 0,
              height: 200,
              width: 200,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headersection}>
        <View>
          <MaterialCommunityIcons name="menu" size={40} />
        </View>
        <View>
          <Text style={styles.headertxt}>SHOE SELECTOR</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="magnify" size={40} />
        </View>
      </View>
      <View style={styles.trending}>
        <Text style={styles.trendingtxt}>Trending</Text>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => TrendingShoes(item, index)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  trendshoeslist: {
    height: 240,
    width: 240,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  trending: {
    padding: 15,
  },
  trendingtxt: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
  },
  headertxt: {
    fontSize: 25,
    color: "grey",
    fontWeight: "700",
  },
  headersection: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
});

export default HomeScreen;
