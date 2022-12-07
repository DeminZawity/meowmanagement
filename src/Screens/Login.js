import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { UserLogin } from "../Helpers/API/Calls";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  var submitLogin = async () => {
    const LoginValid = await UserLogin(email, password);

    if (typeof LoginValid == "object") {
      localStorage.setItem("User", JSON.stringify(LoginValid));
      localStorage.setItem("isLoggedIn", true);
      navigate("/MyCats");
    } else {
      toast.error("Incorrect username or password.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Screen>
        <MainContainer>
          <Title>Welcome Back!</Title>
          <Text LoginPageSub>Please enter your details</Text>
          <SubContainerLogin>
            <LoginCard>
              <Text LoginCardText>Email</Text>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </LoginCard>
            <LoginCard>
              <Text LoginCardText>Password</Text>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </LoginCard>
            <LoginFooter>
              <SignInButton pointer onClick={() => submitLogin()}>
                Sign In
              </SignInButton>
              <RegisterLink pointer onClick={() => navigate("/Register")}>
                Not a member yet?
              </RegisterLink>
            </LoginFooter>
          </SubContainerLogin>
        </MainContainer>
      </Screen>
    </>
  );
}

export default Login;

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
