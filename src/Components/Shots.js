import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text, Screen, Container, Spacer } from "../Helpers/Design/Models";
import moment from "moment";
import { ShotIcon, ArrowIcon } from "../Assets/Icons/Icons";

export function Shots({ shots, onDelete }) {
  const navigate = useNavigate();

  return (
    <DetailsCard>
      <DetailsHeader row>
        <HeaderLeft row>
          <IconWrap centered>
            <ShotIcon centered size={24} color={"white"} />
          </IconWrap>
          <DetailTitleContainer row alignCenter>
            <DetailsTitle>Shot Completed</DetailsTitle>
          </DetailTitleContainer>
        </HeaderLeft>
        <HeaderRight row justifyEnd>
          <DeleteShot centered pointer onClick={() => onDelete(shots.id)}>
            <Text>Delete Shot</Text>
          </DeleteShot>
          <Spacer horizontal size={20} />
          <EditShot centered pointer onClick={() => navigate(`/EditShot/${shots.id}`)}>
            <Text>Edit Shot</Text>
          </EditShot>
          <Spacer horizontal size={5} />
        </HeaderRight>
      </DetailsHeader>
      <DetailsBodyContainer>
        <DetailsBody>
          <Text Subheading>Completed: {moment(shots.completed).format("MMMM Do YYYY")}</Text>
          <Spacer vertical size={5} />
          <Text Subheading>Type Of: {shots.typeOfShot}</Text>
          <Spacer vertical size={5} />
          <Text Subheading color={"rgba(212, 88, 88, 0.8)"}>
            Due Date: {moment(shots.dueDate).format("MMMM Do YYYY")}
          </Text>
        </DetailsBody>
      </DetailsBodyContainer>
    </DetailsCard>
  );
}

const MainContainer = styled(Container)`
  margin-top: 1vh;
  margin-left: 3vh;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Title = styled(Container)`
  font-size: 28px;
`;

const ShotsCardContainer = styled(Container)`
  flex-wrap: wrap;
  width: 100%;
`;

const DetailsCard = styled(Container)`
  background: #414141;
  border-radius: 8px;
  height: 230px;
  width: 70%;
  margin-bottom: 5%;
`;

const DetailsHeader = styled(Container)`
  height: 30%;
`;
const HeaderLeft = styled(Container)`
  width: 50%;
`;
const HeaderRight = styled(Container)`
  width: 50%;
  padding-top: 7px;
  padding-right: 7px;
`;

const IconWrap = styled(Container)`
  min-width: 5vh;
`;

const DetailTitleContainer = styled(Container)`
  margin-top: 10px;
`;

const DetailsTitle = styled(Container)`
  font-size: 1.4em;
  width: 20vh;
  margin-bottom: 10px;
`;

const DeleteShot = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 8vw;
`;

const EditShot = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 8vw;
`;

const DetailsBodyContainer = styled(Container)`
  height: 50% !important;
  overflow: hidden;
`;

const DetailsBody = styled(Container)`
  height: 100%;
  margin-left: 70px;
`;
