import React from "react";
import styled from "styled-components";
import { HospitalBagIcon, ContainerIcon, PaintBrushIcon, ClockIcon } from "../Assets/Icons/Icons";
import { Spacer, Text } from "../Helpers/Design/Models";

export default function GenericCard(props) {
  return (
    <Card>
      <Spacer horizontal size={20} />
      {props.icon}
      <Spacer horizontal size={20} />
      <Text>{props.text}</Text>
    </Card>
  );
}

const Card = styled.div`
  font-size: 18px;
  width: 45vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #414141;
  margin: 20px 0;
  border-radius: 7px;
`;
