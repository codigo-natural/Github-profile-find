import { Typography, Stack } from '@mui/material';
import React, { Fragment } from 'react'
import Moment from 'react-moment';

const PrincipalInformation = (props) => {
  const { userState } = props;
  const {
    name,
    login,
    created_at,
  } = userState;
  return (
    <Fragment>
      <Stack
        direction={{
          xs: "column",
          lg: "row"
        }}
        sx={{
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='subtitle2'>
          <Moment format='DD/MM/YYYY'>
            {created_at}
          </Moment>
        </Typography>
      </Stack>
      <Typography variant='caption'>{`@${login}`}</Typography>
    </Fragment>
  )
}

export default PrincipalInformation