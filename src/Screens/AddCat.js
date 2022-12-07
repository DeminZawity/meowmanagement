import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Screen, Container } from "../Helpers/Design/Models";
import { AddCatFunction } from "../Helpers/API/Calls";

function AddCat() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [breedOptions, setBreedOptions] = useState([]);
  const [coatColor, setCoatColor] = useState("");
  const [usersId, setUsersId] = useState("");

  useEffect(() => {
    fetchUsersId();
  }, []);

  var fetchUsersId = () => {
    const localUser = JSON.parse(localStorage.getItem("User"));
    setUsersId(localUser.id);

    var breed = [
      {
        name: "Domestic Shorthair",
      },
      {
        name: "Siemese",
      },
      {
        name: "Balmic",
      },
      {
        name: "Slavic",
      },
      {
        name: "Turkish Longhair",
      },
    ];

    setBreedOptions(breed);
  };

  // useEffect(() => {
  //   if(gender == 'Female'){
  //     setCoatColorOptions([])
  //   }
  // }, [gender]);

  const SaveCatButton = async () => {
    const CatSaved = await AddCatFunction(fullName, gender, breed, coatColor, usersId);
  };

  return (
    <Screen>
      <MainContainer>
        <Title>Add A Cat Page</Title>
      </MainContainer>
      <SubContainer>
        <AddCatCard column>
          <Text>Full Name</Text>
          <input type="text" onChange={(e) => setFullName(e.target.value)} />
        </AddCatCard>
        <AddCatCard column>
          <Text>Gender</Text>
          <input type="text" onChange={(e) => setGender(e.target.value)} />
        </AddCatCard>
        <AddCatCard column>
          <Text>Breed</Text>
          <DropdownContainer>
            <Dropdown onChange={(e) => setBreed(e.target.value)}>
              <option value="Default">- Pick Breed - </option>
              {breedOptions &&
                breedOptions.map((breed, index) => (
                  <option value={breed.name} key={index}>
                    {breed.name}
                  </option>
                ))}
            </Dropdown>
          </DropdownContainer>
        </AddCatCard>
        <AddCatCard column>
          <Text>Coat Color</Text>
          <input type="text" onChange={(e) => setCoatColor(e.target.value)} />
        </AddCatCard>
        <Footer column alignEnd>
          <AddButton justifyCenter pointer onClick={() => SaveCatButton()}>
            <Text>Add Cat</Text>
          </AddButton>
        </Footer>
      </SubContainer>
    </Screen>
  );
}

export default AddCat;

const DropdownContainer = styled(Container)``;

const Dropdown = styled.select`
  border: 1px solid white;
  border-radius: 5px;

  width: 40%;
  min-height: 40px;
  background: lightgrey;
  outline: none;
  color: black;

  &:focus,
  &:hover {
    outline: none;
  }
`;
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
