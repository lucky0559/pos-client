import React, { useState } from "react";
import styled from "styled-components/native";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(username, password);
  };

  return (
    <Container>
      <LoginContainer>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={e => setUsername(e)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </LoginContainer>
      <Button
        text="Login"
        onPress={onLogin}
        disabled={!!!(username && password)}
      />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
`;

const LoginContainer = styled.View`
  width: 300px;
  margin-bottom: 50px;
`;

export default Login;
