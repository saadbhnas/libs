import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text h1>Account Screen</Text>
      <Button title="signout" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AccountScreen;
