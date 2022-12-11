import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text, Screen, Container, Spacer } from "../Helpers/Design/Models";
import { ShotIcon, ArrowIcon } from "../Assets/Icons/Icons";
import { GetShots } from "../Helpers/API/Calls";
import { Shots } from "../Components/Shots";

function ShotsCompleted() {
  const [shots, setShots] = useState([]);
  const { CatID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchShots();
  }, []);

  var fetchShots = async () => {
    var filteredShots = await GetShots(CatID);
    setShots(filteredShots);
    console.log(shots);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Shots Completed</Title>
        <Spacer vertical size={40} />
        <ShotsCardContainer>
          {shots.map((shot) => (
            <Shots shots={shot} />
          ))}
          {shots.length < 1 && <Text>No Shots Completed</Text>}
        </ShotsCardContainer>
      </MainContainer>
    </Screen>
  );
}

export default ShotsCompleted;

const MainContainer = styled(Container)`
  margin-top: 1vh;
  margin-left: 3vh;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Title = styled(Container)`
  font-size: 28px;
`;

const ShotsCardContainer = styled(Container)`
  flex-wrap: wrap;
  width: 100%;
`;

const DetailsCard = styled(Container)`
  background: #414141;
  border-radius: 8px;
  height: 230px;
  width: 70%;
  margin-bottom: 5%;
`;

const DetailsHeader = styled(Container)`
  height: 30%;
`;
const HeaderLeft = styled(Container)`
  width: 50%;
`;
const HeaderRight = styled(Container)`
  width: 50%;
  padding-top: 7px;
  padding-right: 7px;
`;

const IconWrap = styled(Container)`
  min-width: 5vh;
`;

const DetailTitleContainer = styled(Container)`
  margin-top: 10px;
`;

const DetailsTitle = styled(Container)`
  font-size: 1.4em;
  width: 20vh;
  margin-bottom: 10px;
`;

const DeleteShot = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 8vw;
`;

const EditShot = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 8vw;
`;

const DetailsBodyContainer = styled(Container)`
  height: 50% !important;
  overflow: hidden;
`;

const DetailsBody = styled(Container)`
  height: 100%;
  margin-left: 70px;
`;
