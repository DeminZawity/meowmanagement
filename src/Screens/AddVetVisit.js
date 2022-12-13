import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { AddVetVisitFunction } from "../Helpers/API/Calls";

function AddVetVisit() {
  const [visitConcern, SetVisitConcern] = useState([]);
  const [visitDate, SetVisitDate] = useState([]);
  const [visitNotes, SetVisitNotes] = useState([]);
  const [catId, setCatId] = useState([]);
  const navigate = useNavigate();
  const { CatID } = useParams();

  useEffect(() => {
    fetchCatId();
  }, []);

  var fetchCatId = () => {
    setCatId(parseInt(CatID));
  };

  const SaveVisitButton = async () => {
    const VisitSaved = await AddVetVisitFunction(visitConcern, visitDate, visitNotes, catId);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Add A Vet Visit Page</Title>
      </MainContainer>
      <SubContainer>
        <AddVisitCard column>
          <Text>Concern:</Text>
          <input type="text" onChange={(e) => SetVisitConcern(e.target.value)} />
        </AddVisitCard>
        <AddVisitCard column>
          <Text>Date:</Text>
          <input type="date" onChange={(e) => SetVisitDate(e.target.value)} />
        </AddVisitCard>
        <AddVisitCard column>
          <Text>Visit Notes:</Text>
          <input type="text" onChange={(e) => SetVisitNotes(e.target.value)} />
        </AddVisitCard>
        <Footer column alignEnd>
          <AddButton justifyCenter pointer onClick={() => SaveVisitButton()}>
            <Text>Add Visit</Text>
          </AddButton>
        </Footer>
      </SubContainer>
    </Screen>
  );
}

export default AddVetVisit;

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
