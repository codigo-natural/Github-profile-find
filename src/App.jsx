import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher';
import { getGithubUsers } from './services/users'

const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userStater, userState] = useState('inputUser');

  const gettinUser = async (user) => {
    const userResponse = await getGithubUsers(user)
    console.log(userResponse)
  }

  useEffect(() => {
    gettinUser(inputUser)
  },
    [])
  return (
    <Container sx={{
      background: '#6c757d',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
}

export default App;