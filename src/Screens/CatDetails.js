import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container, Spacer } from "../Helpers/Design/Models";
import { GetCatDetails } from "../Helpers/API/Calls";
import { BandAidIcon, StethoscopeIcon, ArrowIcon, ShotIcon } from "../Assets/Icons/Icons";
import { VetInfo } from "../Components/VetInfo";
import { RecentVisit } from "../Components/RecentVisit";
import { RecentShot } from "../Components/RecentShot";

function CatDetails() {
  const [vetInfo, setVetInfo] = useState(null);
  const [vetVisit, setVetVisit] = useState(null);
  const [shots, setShots] = useState(null);
  const { ID, vetID } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  var fetchDetails = async () => {
    var CatDetails = await GetCatDetails(ID, vetID);
    console.log(CatDetails);
    setVetInfo(CatDetails.vetInformation);
    setVetVisit(CatDetails.vetVisits.filter((obj) => obj.id == Math.max(...CatDetails.vetVisits.map((o) => o.id)))[0]);
    setShots(CatDetails.shots.filter((obj) => obj.id == Math.max(...CatDetails.shots.map((o) => o.id)))[0]);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Cat Details Page</Title>
        <Spacer vertical size={40} />
        <CatCardContainer column>
          {vetInfo !== null && <VetInfo vetInfo={vetInfo} CatID={ID} />}
          {vetVisit !== null && <RecentVisit vetVisit={vetVisit} CatID={ID} />}
          {shots !== null && <RecentShot shots={shots} CatID={ID} />}
        </CatCardContainer>
      </MainContainer>
    </Screen>
  );
}

export default CatDetails;

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

const CatCardContainer = styled(Container)`
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

const HeaderLeft = styled(Container)`
  width: 50%;
`;
const HeaderRight = styled(Container)`
  width: 50%;
  padding-top: 7px;
  padding-right: 7px;
`;

const IconWrap = styled(Container)`
  width: 5vh;
`;

const DetailsHeader = styled(Container)`
  height: 30%;
`;

const DetailsTitle = styled(Container)`
  font-size: 1.4em;
  width: 20vh;
`;

const VetInfoEdit = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 5vw;
`;

const DetailsBodyContainer = styled(Container)`
  height: 50% !important;
  overflow: hidden;
`;

const DetailsBody = styled(Container)`
  height: 100%;
  margin-left: 50px;
`;

const DetailsText = styled(Container)`
  color: #8d8d8d;
`;

const DetailTitleContainer = styled(Container)`
  margin-top: 10px;
`;

const DetailsTextConcern = styled(Container)`
  color: #546f88;
`;

const CatAdditionalInfo = styled(Container)`
  height: 95%;
  width: 45%;
  margin-left: 45px;
  background-color: #828282;
  border-radius: 5px;
`;

const DetailFooter = styled(Container)`
  height: 18%;

  overflow: hidden;
`;
