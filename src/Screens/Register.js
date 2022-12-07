import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import toast, { Toaster } from "react-hot-toast";
import { Register as RegisterCall } from "../Helpers/API/Calls";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var CreateUser = async () => {
    const isRegistered = await RegisterCall(fullName, email, password);

    if (isRegistered == true) {
      toast.success("Account created successfully");
    } else {
      toast.error("Failed to create account. Please try again later.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Screen>
        <MainContainer>
          <Title>Welcome!</Title>
          <Text LoginPageSub>Please enter your details to access Meow Management</Text>
          <SubContainerLogin>
            <LoginCard>
              <Text LoginCardText>Full Name</Text>
              <input type="text" onChange={(e) => setFullName(e.target.value)} />
            </LoginCard>
            <LoginCard>
              <Text LoginCardText>Email</Text>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </LoginCard>
            <LoginCard>
              <Text LoginCardText>Password</Text>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </LoginCard>
            <LoginFooter>
              <SignInButton pointer onClick={() => CreateUser()}>
                Sign Up
              </SignInButton>
            </LoginFooter>
          </SubContainerLogin>
        </MainContainer>
      </Screen>
    </>
  );
}

export default Register;

const MainContainer = styled(Container)`
  margin-top: 8vh;
  margin-left: 8vh;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Title = styled(Container)`
  font-size: 28px;
`;

const SubContainerLogin = styled(Container)`
  width: 70vh;
  margin-left: 10vh;
`;

const LoginCard = styled(Container)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SignInButton = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 10vw;
  background-color: #414141;
  border-radius: 7px;
`;

const LoginFooter = styled(Container)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RegisterLink = styled(Container)`
  margin-top: 10px;
`;
