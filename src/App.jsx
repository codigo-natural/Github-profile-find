import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { getGithubUsers } from "./services/users";
import UserCard from "./containers/UserCard";

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser)
  const [notFound, setNotFound] = useState(false)

  const gettinUser = async (user) => {
    const userResponse = await getGithubUsers(user)

    if (userState === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(userResponse))
    }

    if (userResponse.message === 'Not Found') {
      const { octocat } = localStorage
      setInputUser(octocat)
      setUserState(JSON.parse(octocat))
      setNotFound(true)
    } else {
      setUserState(userResponse)
      setNotFound(false)
    }
  }

  useEffect(() => {
    gettinUser(inputUser)
  }, [inputUser])

  const containerStyles = {
    background: '#bbdefb',
    width: { xs: '90vw', md: '80vw' },
    height: { xs: "100%", md: "80vh", lg: "500px" },
    borderRadius: '16px',
    marginTop: { xs: "15px", md: "30px", lg: "40px" },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: { xs: "1rem", sm: "3rem", lg: "0" }
  }

  return (
    <Container sx={containerStyles}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} notFound={notFound} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
