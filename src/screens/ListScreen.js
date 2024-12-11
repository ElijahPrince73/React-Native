import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "John", id: 11 },
    { name: "SFS", id: 22 },
    { name: "sadfsaf", id: 33 },
  ];

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
