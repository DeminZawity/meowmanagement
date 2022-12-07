import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container, Screen, Hover } from "../Helpers/Design/Models";
import { HospitalBagIcon, ContainerIcon, PaintBrushIcon, ClockIcon } from "../Assets/Icons/Icons";
import GenericCard from "../Components/GenericCard";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Screen>
      <MainContainer>
        <Title>Everything you need to keep track of your Furry Friends.</Title>
        <SubContainerLanding>
          <SubHeader>What we offer</SubHeader>
          <GenericCard text={"Keep track of your cat’s health"} icon={<HospitalBagIcon size={24} color={"white"} />} />
          <GenericCard text={"Access a complete list of resources"} icon={<ContainerIcon size={24} color={"white"} />} />
          <GenericCard text={"Customize your pet’s profile"} icon={<PaintBrushIcon size={24} color={"white"} />} />
          <GenericCard text={"More features coming soon"} icon={<ClockIcon size={24} color={"white"} />} />
          <GetStarted pointer onClick={() => navigate("/Login")}>
            Get Started
          </GetStarted>
        </SubContainerLanding>
      </MainContainer>
    </Screen>
  );
}

export default LandingPage;

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

const SubContainerLanding = styled(Container)``;

const SubHeader = styled(Container)`
  color: #6d6d6d;
  margin-top: 8vh;
  margin-bottom: 2vh;
`;

const Card = styled(Container)`
  font-size: 18px;
  width: 45vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #414141;
  margin: 20px 0;
  border-radius: 7px;
`;

const GetStarted = styled(Container)`
  font-size: 27px;
  border-radius: 7px;
  background-color: #414141;
  width: 20vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
