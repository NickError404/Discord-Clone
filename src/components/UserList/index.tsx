import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return <Container>
    <Role>Disponível - 1</Role>
    <UserRow nickname="Guilherme Rodz" />

    <Role>Offiline - 18</Role>
    <UserRow nickname="Diego Fernando" isBot />
    <UserRow nickname="Aleatório" />
    <UserRow nickname="Linuxss" />
    <UserRow nickname="Sthepah" />
    <UserRow nickname="Sarceroth" />
    <UserRow nickname="Credddds" />
    <UserRow nickname="Lucaxs" />
    <UserRow nickname="Mbrdxt" />
    <UserRow nickname="X Æ A-XII" />
    <UserRow nickname="Aleatório" />
    <UserRow nickname="Aleatório" />
    <UserRow nickname="Aleatório" />
    <UserRow nickname="Aleatório" />
    <UserRow nickname="Aleatório" />
    <UserRow nickname="Piadas22" />
    <UserRow nickname="Sexsoo" />
  </Container>
};

export default UserList;
