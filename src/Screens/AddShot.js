import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { AddShotFunction } from "../Helpers/API/Calls";

function AddShot() {
  const [completedShot, SetCompletedShot] = useState([]);
  const [typeOfShot, SetTypeOfShot] = useState([]);
  const [dueDate, SetDueDate] = useState([]);
  const [catId, SetCatId] = useState([]);
  const navigate = useNavigate();
  const { CatID } = useParams();

  useEffect(() => {
    fetchCatId();
  }, []);

  var fetchCatId = () => {
    SetCatId(parseInt(CatID));
  };

  const SaveShotButton = async () => {
    const ShotSaved = await AddShotFunction(completedShot, typeOfShot, dueDate, catId);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Add A Shot Page</Title>
      </MainContainer>
      <SubContainer>
        <AddShotCard column>
          <Text>Completed:</Text>
          <input type="date" onChange={(e) => SetCompletedShot(e.target.value)} />
        </AddShotCard>
        <AddShotCard column>
          <Text>Type Of:</Text>
          <input type="text" onChange={(e) => SetTypeOfShot(e.target.value)} />
        </AddShotCard>
        <AddShotCard column>
          <Text>Due Date:</Text>
          <input type="date" onChange={(e) => SetDueDate(e.target.value)} />
        </AddShotCard>
        <Footer column alignEnd>
          <AddButton justifyCenter pointer onClick={() => SaveShotButton()}>
            <Text>Add Shot</Text>
          </AddButton>
        </Footer>
      </SubContainer>
    </Screen>
  );
}

export default AddShot;

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
