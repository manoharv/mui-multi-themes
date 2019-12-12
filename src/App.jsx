// @flow

import React, { useState, useMemo } from 'react';

import { Box, Container, TextField, Button } from '@material-ui/core';
import { MuiThemeProvider, type ThemeOptions } from '@material-ui/core/styles'

import ThemeSelector from './components/ThemeSelector';
import Themes from './theme';

export default function App() {
  const [themeType, setThemeType] = useState<string>('light');

  const MuiTheme = useMemo<ThemeOptions>(
    () => Themes[themeType],
    [themeType],
  );

  const handleOnThemeChange = (themeType: string) => {
    setThemeType(themeType)
  }

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeSelector themeType={themeType} onThemeChange={handleOnThemeChange}/>
      <Container maxWidth="md">
        <Box my={4}>
          <TextField label="Error" error />
          <Button color="secondary">Secondary Button</Button>
          <Button color="primary">Primary Button</Button>
        </Box>
        <Box color="primary.light">primary.light</Box>
        <Box color="primary.main">primary.main</Box>
        <Box color="primary.dark">primary.dark</Box>
        <Box color="secondary.light">secondary.light</Box>
        <Box color="secondary.main">secondary.main</Box>
        <Box color="secondary.dark">secondary.dark</Box>
      </Container>
    </MuiThemeProvider>
  );
}
