import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { CatIcon, ArrowIcon } from "../Assets/Icons/Icons";
import { Spacer, Text, Container } from "../Helpers/Design/Models";

export default function CatCard(props) {
  const navigate = useNavigate();

  return (
    <CCard>
      <CatHeader row>
        <HeaderLeft row>
          <IconWrap centered>
            <CatIcon centered size={24} color={"white"} />
          </IconWrap>
          <CatCardTitle row alignCenter>
            {props.data.catName}
          </CatCardTitle>
        </HeaderLeft>
        <HeaderRight row justifyEnd>
          <CatInfoEdit centered pointer onClick={() => props.onDelete(props.data.id)}>
            <Text centered>Delete Cat</Text>
          </CatInfoEdit>
          <Spacer horizontal size={7} />
          <CatInfoEdit centered pointer>
            <Text centered>Edit Cat</Text>
          </CatInfoEdit>
        </HeaderRight>
      </CatHeader>
      <CatBodyContainer>
        <CatBody>
          <CatText>Gender: {props.data.gender}</CatText>
          <CatText>Breed: {props.data.breed}</CatText>
          <CatText>Coat Color: {props.data.coatColor}</CatText>
        </CatBody>
      </CatBodyContainer>
      <CatFooter>
        <CatAdditionalInfo row centered pointer onClick={() => navigate(`/CatDetails/${props.data.id}/${props.data.vetInformationId}`)}>
          <Text>Additional Information</Text>
          <Spacer horizontal size={15} />
          <ArrowIcon size={24} color={"#546F88"} />
        </CatAdditionalInfo>
      </CatFooter>
    </CCard>
  );
}

const CCard = styled(Container)`
  background-color: #414141;
  height: 200px;
  width: 750px;
  margin-bottom: 30px;
`;
const CatHeader = styled(Container)`
  height: 4vh;
`;
const CatCardTitle = styled(Container)`
  font-size: 1.4em;
  width: 20vh;
`;
const CatCardContainer = styled(Container)``;
const HeaderLeft = styled(Container)`
  width: 50%;
`;
const HeaderRight = styled(Container)`
  width: 50%;
  padding-top: 7px;
  padding-right: 7px;
`;
const CatInfoEdit = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 5vw;
`;
const IconWrap = styled(Container)`
  width: 5vh;
`;
const CatBodyContainer = styled(Container)`
  height: 7vh;
`;
const CatBody = styled(Container)`
  height: 100%;
  width: 10vw;
  margin-left: 80px;
`;
const CatText = styled(Container)`
  color: #8d8d8d;
`;
const CatFooter = styled(Container)`
  height: 4vh;
`;
const CatAdditionalInfo = styled(Container)`
  height: 3vh;
  width: 12vw;
  margin-left: 85px;
  background-color: #828282;
  border-radius: 5px;
`;
