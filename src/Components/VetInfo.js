import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BandAidIcon, StethoscopeIcon, ArrowIcon } from "../Assets/Icons/Icons";
import { Spacer, Text, Container } from "../Helpers/Design/Models";

export function VetInfo({ vetInfo, CatID }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(vetInfo);
  }, []);
  return (
    <DetailsCard fullWidth={vetInfo.length >= 1}>
      <DetailsHeader row>
        <HeaderLeft row>
          <IconWrap centered>
            <BandAidIcon centered size={24} color={"white"} />
          </IconWrap>
          <DetailsTitle row alignCenter>
            Vet Information
          </DetailsTitle>
        </HeaderLeft>
        <HeaderRight row justifyEnd>
          {vetInfo.length < 1 && (
            <VetInfoEdit centered pointer>
              <Text centered onClick={() => navigate(`/AddVet/${CatID}`)}>
                Add Vet
              </Text>
            </VetInfoEdit>
          )}
          {vetInfo !== [] && vetInfo.length > 0 && (
            <VetInfoEdit centered pointer>
              <Text centered>Edit Vet</Text>
            </VetInfoEdit>
          )}
        </HeaderRight>
      </DetailsHeader>
      <DetailsBodyContainer>
        {vetInfo.length >= 1 ? (
          <DetailsBody>
            <DetailsText>Name: {vetInfo[0].vetName}</DetailsText>
            <DetailsText>Address: {vetInfo[0].vetAddress}</DetailsText>
            <DetailsText>Phone Number: {vetInfo[0].vetPhoneNumber}</DetailsText>
            <DetailsText>Fax Number: {vetInfo[0].vetFaxNumber}</DetailsText>
          </DetailsBody>
        ) : (
          <DetailsBody>
            <DetailsText>No Vet Information Registered Yet</DetailsText>
          </DetailsBody>
        )}
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

const CatCardContainer = styled(Container)`
  flex-wrap: wrap;
  width: 100%;
`;

const DetailsCard = styled(Container)`
  background: #414141;
  border-radius: 8px;
  height: 230px;
  width: 30%;
  margin-bottom: 5%;

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 70%;
`}
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
  width: 5vh;
`;

const DetailsHeader = styled(Container)`
  height: 30%;
`;

const DetailsTitle = styled(Container)`
  font-size: 1.4em;
  width: 20vh;
`;

const VetInfoEdit = styled(Container)`
  background-color: #828282;
  border-radius: 5px;
  height: 3vh;
  width: 5vw;
`;

const DetailsBodyContainer = styled(Container)`
  height: 50% !important;
  overflow: hidden;
`;

const DetailsBody = styled(Container)`
  height: 100%;
  margin-left: 50px;
`;

const DetailsText = styled(Container)`
  color: #8d8d8d;
`;

const DetailTitleContainer = styled(Container)`
  margin-top: 10px;
`;

const DetailsTextConcern = styled(Container)`
  color: #546f88;
`;

const CatAdditionalInfo = styled(Container)`
  height: 95%;
  width: 45%;
  margin-left: 45px;
  background-color: #828282;
  border-radius: 5px;
`;

const DetailFooter = styled(Container)`
  height: 18%;

  overflow: hidden;
`;
