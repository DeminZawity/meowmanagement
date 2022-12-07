import styled from "styled-components";
import { Text, Screen, Container, Spacer } from "../Helpers/Design/Models";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/Home");
  };

  return (
    <NavContainer row justifyEnd>
      <LogoContainer row justifyStart>
        <LogoText centered>Meow Management</LogoText>
      </LogoContainer>
      <NavLinksContainer row justifyEnd>
        <NavDiv pointer centered onClick={() => navigate("/MyCats")}>
          <Text>My Cats</Text>
        </NavDiv>
        <Spacer horizontal size={30}></Spacer>
        <NavDiv pointer centered onClick={() => Logout()}>
          <Text>Logout</Text>
        </NavDiv>
        <Spacer horizontal size={30}></Spacer>
      </NavLinksContainer>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  height: 6vh;
`;

const NavDiv = styled(Container)`
  font-weight: bold;
`;

const NavLinksContainer = styled(Container)`
  width: 50%;
`;
const LogoContainer = styled(Container)`
  width: 50%;
`;

const LogoText = styled(Container)`
  color: #6d6d6d;
  font-weight: bold;
  width: 22vh;
`;
