import React from 'react'
import { Stack } from '@mui/system'
import { IconButton, TextField } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

const Searcher = () => {
  const estilos = {
    marginTop: '30px',
    width: '80%'
  };
  const styleTextField = {
    width: '90%',
    margin: '0 auto',
  }

  return (
    <Stack direction='row' sx={estilos}>
      <TextField
        sx={styleTextField}
        type='search'
        autoComplete='off'
        label='GitHub User'
        size='small'
        id='outline-basic'
        variant='outlined'
        placeholder='octocat'
        InputProps={{
          endAdornment: (
            <IconButton size='small'>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack >
  )
}

export default Searcher