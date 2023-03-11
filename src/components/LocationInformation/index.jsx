import { Grid, Link, Typography } from '@mui/material';
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
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <TwitterIcon />
          <Link
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            {' '}
            <Typography>{`@${twitter_username}` || 'No indica'}</Typography>
          </Link>
          {/* {
            twitter_username !== null
              ? <a target='_blank' rel='noreferrer' href={twitter_username}> <Typography>@{twitter_username}</Typography></a>
              : <Typography>Not Avliable</Typography>
          } */}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LanguageIcon />
          <Link
            href={blog}
            target='_blank'
            rel='noreferrer'
            underline='hover'
          >
            {' '}
            <Typography>{`${blog}` || 'Not Avaliable'}</Typography>
          </Link>
          {/* {
            blog !== null
              ? <a target='_blank' rel='noreferrer' href={blog}><Typography>{blog}</Typography></a>
              : <Typography>Not Avaliable</Typography>
          } */}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <BusinessIcon />
          {
            company !== null
              ? <Typography>{company}</Typography>
              : <Typography>Not Avaliable</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation