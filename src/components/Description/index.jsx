import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react'

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <Fragment>
      <Stack>
        {
          bio !== null
          ? <Typography>{bio}</Typography>
          : <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quia non aliquam eum deleniti dolorum eos iste nam quidem? Recusandae nesciunt </Typography>
        }
      </Stack>
      {/* <PaperInformation /> */}
      {/* <LocationInformation /> */}
    </Fragment>
  )
}

export default Description