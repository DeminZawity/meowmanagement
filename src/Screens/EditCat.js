import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { GetCats, UpdateCat } from "../Helpers/API/Calls";

function EditCat() {
  const [catName, setCatName] = useState([]);
  const [gender, setGender] = useState([]);
  const [breed, setBreed] = useState([]);
  const [coatColor, setCoatColor] = useState([]);
  const [catInformation, setCatInformation] = useState([]);
  const { CatID } = useParams();

  useEffect(() => {
    fetchCatInfo();
  }, []);

  var fetchCatInfo = async () => {
    const fetchingCat = await GetCats(CatID);
    setCatInformation(fetchingCat);
    setCatName(fetchingCat[0].catName);
    setGender(fetchingCat[0].gender);
    setBreed(fetchingCat[0].breed);
    setCoatColor(fetchingCat[0].coatColor);
  };

  const UpdatingCat = async () => {
    const CatUpdated = await UpdateCat(CatID, catName, gender, breed, coatColor);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Edit Cat Page</Title>
      </MainContainer>
      {catInformation.length >= 1 && (
        <SubContainer>
          <AddCatCard column>
            <Text>Full Name</Text>
            <input type="text" onChange={(e) => setCatName(e.target.value)} defaultValue={catInformation[0].catName} />
          </AddCatCard>
          <AddCatCard column>
            <Text>Gender</Text>
            <input type="text" onChange={(e) => setGender(e.target.value)} defaultValue={catInformation[0].gender} />
          </AddCatCard>
          <AddCatCard column>
            <Text>Breed</Text>
            <input type="text" onChange={(e) => setBreed(e.target.value)} defaultValue={catInformation[0].breed} />
          </AddCatCard>
          <AddCatCard column>
            <Text>CoatColor</Text>
            <input type="text" onChange={(e) => setCoatColor(e.target.value)} defaultValue={catInformation[0].coatColor} />
          </AddCatCard>
          <Footer column alignEnd>
            <AddButton justifyCenter pointer onClick={() => UpdatingCat()}>
              <Text>Save Cat</Text>
            </AddButton>
          </Footer>
        </SubContainer>
      )}
    </Screen>
  );
}

export default EditCat;

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

const AddCatCard = styled(Container)`
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
