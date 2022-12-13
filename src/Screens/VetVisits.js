import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text, Screen, Container, Spacer } from "../Helpers/Design/Models";
import { StethoscopeIcon, ArrowIcon } from "../Assets/Icons/Icons";
import { GetVetVisits } from "../Helpers/API/Calls";
import { VetVisitsComponent } from "../Components/VetVisitsComponent";

function VetVisits() {
  const [vetVisits, setVetVisits] = useState([]);
  const { CatID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchVisits();
  }, []);

  var fetchVisits = async () => {
    var visits = await GetVetVisits(CatID);
    setVetVisits(visits);
    console.log(vetVisits);
  };

  return (
    <Screen>
      <MainContainer>
        <Header row>
          <HeaderLeft>
            <Title> Vet Visits</Title>
          </HeaderLeft>
          <HeaderRight row justifyEnd>
            <AddVisitButton centered pointer onClick={() => navigate(`/AddVetVisit/${CatID}`)}>
              <Text>Add Visit</Text>
            </AddVisitButton>
          </HeaderRight>
        </Header>
        <Spacer vertical size={40} />
        <VisitsCardContainer>
          {vetVisits.map((visit) => (
            <VetVisitsComponent vetVisit={visit} />
          ))}
          {vetVisits.length < 1 && <Text>No Vet Visits Present</Text>}
        </VisitsCardContainer>
      </MainContainer>
    </Screen>
  );
}

export default VetVisits;

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

const VisitsCardContainer = styled(Container)`
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

const DeleteVisit = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 8vw;
`;

const EditVisit = styled(Container)`
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
const Header = styled(Container)`
  width: 100%;
`;
const HeaderLeft = styled(Container)`
  width: 50%;
`;
const HeaderRight = styled(Container)`
  width: 50%;
`;
const AddVisitButton = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 4vh;
  min-height: 4vh;
  max-height: 4vh;
  width: 10vw;
  min-width: 10vw;
  max-width: 10vw;
`;
