// @flow

import React from 'react';

import { Container, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';

type Props = {
  themeType: string,
  onThemeChange: (string) => void,
}

export default function ThemeSelector({ themeType, onThemeChange }: Props) {
  const handleOnChange = (event) => {
    onThemeChange(event.target.value)
  }

  return (
    <Container maxWidth="sm">
      <FormControl component="fieldset">
        <FormLabel component="legend">Select a theme type</FormLabel>
        <RadioGroup aria-label="position" name="position" defaultValue={themeType} value={themeType} onChange={handleOnChange} row>
          <FormControlLabel
            value="light"
            control={<Radio color="primary" />}
            label="Light"
          />
          <FormControlLabel
            value="dark"
            control={<Radio color="primary" />}
            label="Dark"
          />
        </RadioGroup>
      </FormControl>
   </Container>
  )
}
