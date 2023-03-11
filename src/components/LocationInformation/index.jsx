import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
import React from 'react'

const LocationInformation = (props) => {
  const { userState } = props;
  const {
    location,
    twitter_username,
    blog,
    company
  } = userState;
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <Typography>{location}</Typography>
          <LocationOnIcon />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {
            twitter_username !== null
              ? <Typography>@{twitter_username}</Typography>
              : <Typography>{ }</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {
            blog !== null
              ? <Typography>{blog}</Typography>
              : <Typography>Not Avaliable</Typography>
          }
          <Typography></Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {
            company !== null
              ? <Typography>{company}</Typography>
              : <Typography>Not Avaliable</Typography>
          }
          <Typography>{company}</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation