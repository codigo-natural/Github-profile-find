import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import Description from '../../components/Description';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt='GitHub User'
          image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
      </Grid>
      <Description userState={userState} />
    </Grid>
  )
}

export default UserCard