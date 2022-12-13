import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { GetUpdatedVet } from "../Helpers/API/Calls";

function AddVet() {
  const [vetName, setVetName] = useState([]);
  const [vetAddress, setVetAddress] = useState([]);
  const [vetPhoneNumber, setVetPhoneNumber] = useState([]);
  const [vetFaxNumber, setVetFaxNumber] = useState([]);
  const [userId, setUserId] = useState([]);
  const [catId, setCatId] = useState([]);
  const navigate = useNavigate();
  const { CatID } = useParams();

  useEffect(() => {
    fetchUsersId();
    fetchCatId();
  }, []);

  var fetchCatId = () => {
    setCatId(CatID);
  };

  var fetchUsersId = () => {
    const localUser = JSON.parse(localStorage.getItem("User"));
    setUserId(localUser.id);
  };

  const SaveVetButton = async () => {
    const VetSaved = await GetUpdatedVet(vetName, vetAddress, vetPhoneNumber, vetFaxNumber, userId, catId);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Add A Vet Page</Title>
      </MainContainer>
      <SubContainer>
        <AddVetCard column>
          <Text>Full Name</Text>
          <input type="text" onChange={(e) => setVetName(e.target.value)} />
        </AddVetCard>
        <AddVetCard column>
          <Text>Address</Text>
          <input type="text" onChange={(e) => setVetAddress(e.target.value)} />
        </AddVetCard>
        <AddVetCard column>
          <Text>Phone Number</Text>
          <input type="text" onChange={(e) => setVetPhoneNumber(e.target.value)} />
        </AddVetCard>
        <AddVetCard column>
          <Text>Fax Number</Text>
          <input type="text" onChange={(e) => setVetFaxNumber(e.target.value)} />
        </AddVetCard>
        <Footer column alignEnd>
          <AddButton justifyCenter pointer onClick={() => SaveVetButton()}>
            <Text>Add Vet</Text>
          </AddButton>
        </Footer>
      </SubContainer>
    </Screen>
  );
}
{
  /* <Btn onClick={() => testAPI()}></Btn> */
}

export default AddVet;

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

const AddVetCard = styled(Container)`
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
