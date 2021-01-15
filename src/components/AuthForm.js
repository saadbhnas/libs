import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import { View } from "react-native";
import Spacer from "../components/spacer";

const AuthForm = ({ header, submiteTitle, onSubmiteCallBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Spacer>
        <Text h1>{header}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </Spacer>
      <Button
        title={submiteTitle}
        onPress={() => onSubmiteCallBack({ email, password })}
      />
    </View>
  );
};

export default AuthForm;
