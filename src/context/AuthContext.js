import createDataContext from "./createDataContext";
import libsApi from "../api/libs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMassage: "", token: action.payload };
    case "clearErrorMessage":
      return { ...state, errorMessage: "" };
    case "sign_out":
      return { ...state, token: null };
    default:
      return state;
  }
};

const automaticLogin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigate("MyProduct");
    } else {
      return;
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clearErrorMessage" });
  };
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await libsApi.post("/Signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("MyProduct");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await libsApi.post("/Signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      navigate("MyProduct");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "sign_out" });
    navigate("loginFlow");
  };
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { signup, signin, signout, clearErrorMessage, automaticLogin },
  {
    token: null,
    errorMessage: "",
  }
);
