import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hello </Text>
      <Button
        title="Components"
        onPress={() => {
          navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigate("List");
        }}
      >
        <Text>Go to list</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
