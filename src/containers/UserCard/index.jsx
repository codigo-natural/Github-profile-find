import { CardMedia, Grid } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import Description from '../../components/Description';
import PrincipalInformation from '../../components/PrincipalInformation';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >
      <Grid
        item
        xs={12}
        md={5}
        lg={3}
      >
        <CardMedia
          component='img'
          alt='GitHub User'
          image={avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px',
            width: {
              xs: '35%',
              md: '75%',
              lg: '100%'
            },
            margin: 'auto'
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        ld={9}
      >
        <Stack
          direction='column'
          spacing={1}
          sx={{
            margin: {
              xs: '0px 0px',
              md: '5px 30px',
              lg: '30px'
            }
          }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard