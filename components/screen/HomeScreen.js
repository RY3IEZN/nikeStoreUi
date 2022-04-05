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
import { Svg, Polygond, Polygon } from "react-native-svg";
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
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 0,
      name: "Nike Metcon 4",
      img: require("../../assets/nike-metcon-4.png"),
      bgColor: "#414045",
      type: "TRAINING",
      price: "$119",
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: "Nike Metcon 6",
      img: require("../../assets/nike-metcon-6.png"),
      bgColor: "#4EABA6",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: "Nike Metcon 5",
      img: require("../../assets/nike-metcon-5-purple.png"),
      bgColor: "#2B4660",
      type: "TRAINING",
      price: "$124",
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: "Nike Metcon 3",
      img: require("../../assets/nike-metcon-3.png"),
      bgColor: "#A69285",
      type: "TRAINING",
      price: "$99",
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: "Nike Metcon Free",
      img: require("../../assets/nike-metcon-free.png"),
      bgColor: "#A02E41",
      type: "TRAINING",
      price: "$108",
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]);

  const TrendingShoes = (item, index) => {
    return (
      <TouchableOpacity style={styles.trendshoeslist}>
        <Text style={{ color: "grey", fontSize: 15, fontWeight: "700" }}>
          {item.type}
        </Text>
        <View
          style={[
            {
              backgroundColor: item.bgColor,
              justifyContent: "flex-end",
              marginTop: 8,
              flex: 1,
              borderRadius: 10,
              marginRight: 20,
              padding: 10,
            },
            styles.trendingshadows,
          ]}
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
          <View
            style={{
              position: "absolute",
              top: 0.1,
              right: -90,
              width: "95%",
            }}
          >
            <Svg width={100} height={100}>
              <Polygon fill="white" points="0,0 160,0 168,80" />
            </Svg>
          </View>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: -30,
              right: -50,
              bottom: 0,
              height: 200,
              width: 200,
              transform: [{ rotate: "-15deg" }],
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const renderRecentlyViewed = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => console.log(item, "pressed")}
        style={{ flex: 1, flexDirection: "row", padding: 15 }}
      >
        <View
          style={{
            paddingleft: 5,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{ width: 130, height: 120 }}
          />
        </View>
        <View
          style={{
            alignItens: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "700" }}>
            {item.name}
          </Text>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            {item.price}
          </Text>
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

      {/* lower half */}

      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            marginTop: 30,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          },
          styles.lowerhalfcontainer,
        ]}
      >
        <View style={{ width: 70 }}>
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/recently-viewed-label.png")}
          />
        </View>
        <View style={{ flex: 1, padding: 24 }}>
          <FlatList
            data={recentlyViewed}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lowerhalfcontainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.45,
    shadowRadius: 0.51,
    elevation: 5,
  },
  trendingshadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
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
  },
});

export default HomeScreen;
