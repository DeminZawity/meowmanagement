import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { GetVetVisitsFunction, UpdateVetVisit } from "../Helpers/API/Calls";

function EditVetVisit() {
  const [visitConcern, setVisitConcern] = useState([]);
  const [visitDate, setVisitDate] = useState([]);
  const [visitNotes, setVisitNotes] = useState([]);
  const [visitInformation, setVisitInformation] = useState([]);
  const { VisitID } = useParams();

  useEffect(() => {
    fetchVisitInfo();
  }, []);

  var fetchVisitInfo = async () => {
    const fetchingVisit = await GetVetVisitsFunction(VisitID);
    console.log(fetchingVisit[0]);
    setVisitInformation(fetchingVisit);
    setVisitConcern(fetchingVisit[0].visitConcern);
    setVisitDate(fetchingVisit[0].visitDate);
    setVisitNotes(fetchingVisit[0].visitNotes);
  };

  const UpdatingVisit = async () => {
    const UpdatingVetVisit = await UpdateVetVisit(VisitID, visitConcern, visitDate, visitNotes);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Edit Visit Page</Title>
      </MainContainer>
      {visitInformation.length >= 1 && (
        <SubContainer>
          <AddVisitCard column>
            <Text>Concern</Text>
            <input type="text" onChange={(e) => setVisitConcern(e.target.value)} defaultValue={visitInformation[0].visitConcern} />
          </AddVisitCard>
          <AddVisitCard column>
            <Text>Date</Text>
            <input type="date" onChange={(e) => setVisitDate(e.target.value)} defaultValue={visitInformation[0].visitDate} />
          </AddVisitCard>
          <AddVisitCard column>
            <Text>Visit Notes</Text>
            <input type="text" onChange={(e) => setVisitNotes(e.target.value)} defaultValue={visitInformation[0].visitNotes} />
          </AddVisitCard>
          <Footer column alignEnd>
            <AddButton justifyCenter pointer onClick={() => UpdatingVisit()}>
              <Text>Save Visit</Text>
            </AddButton>
          </Footer>
        </SubContainer>
      )}
    </Screen>
  );
}

export default EditVetVisit;

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

const SubContainer = styled(Container)`
  width: 70vh;
  margin-left: 10vh;
`;

const AddVisitCard = styled(Container)`
  margin-top: 20px;
`;

const AddButton = styled(Container)`
  display: flex;
  align-items: center;
  height: 5vh;
  width: 10vw;
  background-color: #414141;
  border-radius: 7px;
`;
const Footer = styled(Container)`
  margin-top: 20px;
`;
