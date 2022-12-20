import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { UpdateVetInfoFunction, GetVetInformation } from "../Helpers/API/Calls";

function EditVet() {
  const [vetId, setVetId] = useState([]);
  const [vetName, setVetName] = useState([]);
  const [vetAddress, setVetAddress] = useState([]);
  const [vetPhoneNumber, setVetPhoneNumber] = useState([]);
  const [vetFaxNumber, setVetFaxNumber] = useState([]);
  const [vetInformation, setVetInformation] = useState([]);
  const { vetID } = useParams();

  useEffect(() => {
    fetchVetId();
    fetchVetInfo();
  }, []);

  var fetchVetId = () => {
    setVetId(parseInt(vetID));
  };

  var fetchVetInfo = async () => {
    const fetchingVet = await GetVetInformation(vetID);
    setVetInformation(fetchingVet);
    setVetName(fetchingVet[0].vetName);
    setVetAddress(fetchingVet[0].vetAddress);
    setVetPhoneNumber(fetchingVet[0].vetPhoneNumber);
    setVetFaxNumber(fetchingVet[0].vetFaxNumber);
    console.log(fetchingVet);
  };

  const UpdatingVet = async () => {
    const VetUpdated = await UpdateVetInfoFunction(vetId, vetName, vetAddress, vetPhoneNumber, vetFaxNumber);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Edit Vet Page</Title>
      </MainContainer>
      {vetInformation.length >= 1 && (
        <SubContainer>
          <AddVetCard column>
            <Text>Full Name</Text>
            <input type="text" onChange={(e) => setVetName(e.target.value)} defaultValue={vetInformation[0].vetName} />
          </AddVetCard>
          <AddVetCard column>
            <Text>Address</Text>
            <input type="text" onChange={(e) => setVetAddress(e.target.value)} defaultValue={vetInformation[0].vetAddress} />
          </AddVetCard>
          <AddVetCard column>
            <Text>Phone Number</Text>
            <input type="text" onChange={(e) => setVetPhoneNumber(e.target.value)} defaultValue={vetInformation[0].vetPhoneNumber} />
          </AddVetCard>
          <AddVetCard column>
            <Text>Fax Number</Text>
            <input type="text" onChange={(e) => setVetFaxNumber(e.target.value)} defaultValue={vetInformation[0].vetFaxNumber} />
          </AddVetCard>
          <Footer column alignEnd>
            <AddButton justifyCenter pointer onClick={() => UpdatingVet()}>
              <Text>Save Vet</Text>
            </AddButton>
          </Footer>
        </SubContainer>
      )}
    </Screen>
  );
}

export default EditVet;

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
