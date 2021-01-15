import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/navLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        header="Sign Up With Libs"
        submiteTitle="Signup"
        onSubmiteCallBack={signup}
      />
      <Spacer>
        {state.errorMessage ? (
          <Text style={styles.errormassge}>{state.errorMessage}</Text>
        ) : null}
      </Spacer>
      <NavLink
        linkText="Already have an accont ? Signin instead !"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  errormassge: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
});

export default SignupScreen;
