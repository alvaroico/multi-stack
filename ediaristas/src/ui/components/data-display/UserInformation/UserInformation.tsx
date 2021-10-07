import React from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from "./UserInformation.styles";

interface IUserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description: string;
}

const UserInformation: React.FC<IUserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
