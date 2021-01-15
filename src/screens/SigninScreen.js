import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/navLink";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/spacer";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        header="Sign In To Libs"
        submiteTitle="Signin"
        onSubmiteCallBack={signin}
      />
      <Spacer>
        {state.errorMessage ? (
          <Text style={styles.errormassge}>{state.errorMessage}</Text>
        ) : null}
      </Spacer>
      <NavLink
        linkText="Dont have an account ? Signup instead !"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  errormassge: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SigninScreen;
