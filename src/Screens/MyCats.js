import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { Text, Screen, Container, Spacer } from "../Helpers/Design/Models";
import { GetMyCats, DeleteCat } from "../Helpers/API/Calls";
import { CatIcon, ArrowIcon } from "../Assets/Icons/Icons";
import CatCard from "../Components/CatCard";

function MyCats() {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyCats();
  }, []);

  var fetchMyCats = async () => {
    const localUser = JSON.parse(localStorage.getItem("User"));
    const filteredCats = await GetMyCats(localUser.id);
    console.log(filteredCats);
    setCats(filteredCats);
  };

  var deleteCat = async (id) => {
    // var filteredCats = cats.filter((cat) => cat.id != id);

    const Delete = await DeleteCat(id);
    return Delete;
    // setCats(filteredCats);
  };

  return (
    <Screen>
      <MainContainer>
        <Header row>
          <HeaderLeft>
            <Title>My Cats</Title>
          </HeaderLeft>
          <HeaderRight row justifyEnd>
            <AddCatButton centered pointer onClick={() => navigate("/AddACat")}>
              <Text>Add Cat</Text>
            </AddCatButton>
          </HeaderRight>
        </Header>
        <Spacer vertical size={40} />
        <CatCardContainer column>
          {cats.map((cat) => (
            <CatCard data={cat} onDelete={(id) => deleteCat(id)} />
          ))}
        </CatCardContainer>
      </MainContainer>
    </Screen>
  );
}

export default MyCats;

const MainContainer = styled(Container)`
  margin-top: 1vh;
  margin-left: 3vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Container)`
  font-size: 28px;
`;

const CatCardContainer = styled(Container)``;
const Header = styled(Container)`
  width: 100%;
`;
const HeaderLeft = styled(Container)`
  width: 50%;
`;
const HeaderRight = styled(Container)`
  width: 50%;
`;
const AddCatButton = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 4vh;
  min-height: 4vh;
  max-height: 4vh;
  width: 10vw;
  min-width: 10vw;
  max-width: 10vw;
`;
