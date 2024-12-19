import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "John", id: 11 },
    { name: "SFS", id: 22 },
    { name: "sadfsaf", id: 3 },
    { name: "sadfsaf", id: 332323 },
    { name: "sadfsaf", id: 2433 },
    { name: "sadfsaf", id: 5656 },
    { name: "sadfsaf", id: 77 },
    { name: "sadfsaf", id: 334545 },
    { name: "sadfsaf", id: 3883 },
    { name: "sadfsaf", id: 39993 },
    { name: "sadfsaf", id: 3113 },
    { name: "sadfsaf", id: 3333 },
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
