import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MyProductScreen = ({ navigation }) => {
  return (
    <>
      <Text>MyProductScreen</Text>
      <Button
        title="add product"
        onPress={() => navigation.navigate("AddProduct")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default MyProductScreen;
