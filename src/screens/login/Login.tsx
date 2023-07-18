import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { InputItem } from "@ant-design/react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <LoginContainer>
        <InputItem
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e)}
        />
      </LoginContainer>
    </Container>
  );
};

const Container = styled.View``;

const LoginContainer = styled.View``;

export default Login;
