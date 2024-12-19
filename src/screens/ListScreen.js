import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "John", id: 11, age: 22 },
    { name: "SFS", id: 22, age: 22 },
    { name: "sadfsaf", id: 3, age: 22 },
    { name: "sadfsaf", id: 332323, age: 22 },
    { name: "sadfsaf", id: 2433, age: 22 },
    { name: "sadfsaf", id: 5656, age: 22 },
    { name: "sadfsaf", id: 77, age: 22 },
    { name: "sadfsaf", id: 334545, age: 22 },
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={friends}
      renderItem={({ item }) => {
        return (
          <>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text>{item.age}</Text>
          </>
        );
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
