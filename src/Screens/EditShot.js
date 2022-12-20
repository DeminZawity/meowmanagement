import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { GetShotsFunction, UpdateShots } from "../Helpers/API/Calls";

function EditShot() {
  const [completed, setCompleted] = useState([]);
  const [typeOfShot, setTypeOfShot] = useState([]);
  const [dueDate, setDueDate] = useState([]);
  const [shotInformation, setShotInformation] = useState([]);
  const { ShotID } = useParams();

  useEffect(() => {
    fetchingShotInfo();
  }, []);

  var fetchingShotInfo = async () => {
    const fetchingShot = await GetShotsFunction(ShotID);
    setShotInformation(fetchingShot);
    setCompleted(fetchingShot[0].completed);
    setTypeOfShot(fetchingShot[0].typeOfShot);
    setDueDate(fetchingShot[0].dueDate);
  };

  const UpdatingShot = async () => {
    const UpdatingShotCompleted = UpdateShots(ShotID, completed, typeOfShot, dueDate);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Edit Shot Page</Title>
      </MainContainer>
      {shotInformation.length >= 1 && (
        <SubContainer>
          <AddShotCard column>
            <Text>Completed</Text>
            <input type="date" onChange={(e) => setCompleted(e.target.value)} defaultValue={shotInformation[0].completed} />
          </AddShotCard>
          <AddShotCard column>
            <Text>Type Of</Text>
            <input type="text" onChange={(e) => setTypeOfShot(e.target.value)} defaultValue={shotInformation[0].typeOfShot} />
          </AddShotCard>
          <AddShotCard column>
            <Text>Due Date</Text>
            <input type="date" onChange={(e) => setDueDate(e.target.value)} defaultValue={shotInformation[0].dueDate} />
          </AddShotCard>
          <Footer column alignEnd>
            <AddButton justifyCenter pointer onClick={() => UpdatingShot()}>
              <Text>Save Visit</Text>
            </AddButton>
          </Footer>
        </SubContainer>
      )}
    </Screen>
  );
}

export default EditShot;

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

const AddShotCard = styled(Container)`
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
