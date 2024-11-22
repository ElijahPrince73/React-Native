import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentScreen = () => {
  return (
    <>
    <View>
      <Text style={styles.textStyle}>A component</Text>
    </View>
    <View>
      <Text style={styles.subHeaderStyle}>A component</Text>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  subHeaderStyle: {
    fontSize: 30
  }
})

export default ComponentScreen;