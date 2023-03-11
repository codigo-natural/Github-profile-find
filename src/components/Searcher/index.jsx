import React, { Fragment, useState } from 'react'
import { Stack } from '@mui/system'
import { IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

const Searcher = ({ setInputUser, notFound }) => {

  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value
    setValueInput(inputValue)
  }

  const handleSubmit = () => {
    setInputUser(valueInput)
  }
  const estilos = {
    marginTop: '30px',
    width: '80%'
  };
  const styleTextField = {
    width: '90%',
    margin: '0 auto',
  }

  return (
    <Fragment>
      <Stack direction='row' sx={estilos}>
        <TextField
          sx={styleTextField}
          type='search'
          autoComplete='off'
          label='GitHub User'
          size='small'
          value={valueInput}
          onChange={onSearchValueChange}
          id='outline-basic'
          variant='outlined'
          placeholder='octocat'
          InputProps={{
            endAdornment: (
              <IconButton
                size='small'
                onClick={handleSubmit}
              >
                <SearchIcon />
              </IconButton>
            )
          }} />
      </Stack><Typography color='red'>
        {notFound
          ? 'Error: usuario no existe'
          : ''}
      </Typography>
    </Fragment>
  )
}

export default Searcher