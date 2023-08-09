import React, { useState } from "react";
import styled from "styled-components/native";
import InputField from "../../components/Input";
import Button from "../../components/Button";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import TextError from "../../components/TextError";
import { Layout } from "@ui-kitten/components";
import { LOGIN_USER } from "../../query/user/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [login, { loading, error }] = useLazyQuery(LOGIN_USER, {
    onCompleted: data => {
      navigation.navigate("Menu");
    }
  });

  const onLogin = async () => {
    await login({
      variables: {
        username: username,
        password: password
      }
    });
  };

  return (
    <Container>
      <LoginContainer>
        <InputField
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        {error && <TextError error={error.message} />}
      </LoginContainer>
      <Button
        text="Login"
        onPress={onLogin}
        disabled={!!!(username && password)}
        isSubmitting={loading}
      />
    </Container>
  );
};

const Container = styled(Layout)`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  background-color: #f9f5e7;
`;

const LoginContainer = styled.View`
  width: 300px;
  margin-bottom: 50px;
`;

export default Login;
