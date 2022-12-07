import React, { useEffect } from "react";
import styled from "styled-components";
import { BandAidIcon, StethoscopeIcon, ArrowIcon } from "../Assets/Icons/Icons";
import { Spacer, Text, Container } from "../Helpers/Design/Models";

export function RecentVisit({ vetVisit }) {
  return (
    <DetailsCard fullWidth={vetVisit != null}>
      <DetailsHeader row>
        <HeaderLeft row>
          <IconWrap centered>
            <StethoscopeIcon centered size={24} color={"white"} />
          </IconWrap>
          <DetailTitleContainer>
            <DetailsTitle>Vet Visits</DetailsTitle>
            <DetailsText>Most Recent Vet Visit:</DetailsText>
          </DetailTitleContainer>
        </HeaderLeft>
        <HeaderRight row justifyEnd>
          {vetVisit == null && (
            <VetInfoEdit centered pointer>
              <Text centered>Add Visit</Text>
            </VetInfoEdit>
          )}
        </HeaderRight>
      </DetailsHeader>
      <DetailsBodyContainer>
        {vetVisit == null ? (
          <DetailsBody>
            <DetailsText>No Vet Visits Completed Yet</DetailsText>
          </DetailsBody>
        ) : (
          <DetailsBody>
            <Text Subheading color={"rgba(106, 53, 230, 0.8)"}>
              Concern: {vetVisit.visitConcern}
            </Text>
            <Text Subheading>Date: {vetVisit.visitDate}</Text>
            <Text Subheading>Vet Visit: {vetVisit.visitNotes}</Text>
          </DetailsBody>
        )}
      </DetailsBodyContainer>
      <DetailFooter>
        <CatAdditionalInfo row centered pointer>
          <Text>Additional Information</Text>
          <Spacer horizontal size={15} />
          <ArrowIcon size={24} color={"#546F88"} />
        </CatAdditionalInfo>
      </DetailFooter>
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
  min-width: 5vh;
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
