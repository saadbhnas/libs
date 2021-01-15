import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Text, View, StyleSheet, Image } from "react-native";

const AuthResolveScreen = () => {
  const { automaticLogin } = useContext(AuthContext);
  useEffect(() => {
    automaticLogin();
  }, []);
  return <Text h1>LIBS</Text>;
};

export default AuthResolveScreen;
