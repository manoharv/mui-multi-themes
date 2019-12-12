// @flow

import { createMuiTheme, type ThemeOptions } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors'

const LightTheme: ThemeOptions = createMuiTheme({
  palette: {
    primary: { main: Colors.blue.A400 },
    secondary: { main: Colors.grey.A400 },
    error: { main: Colors.red.A400 },
    background: {
      default: '#fff',
    },
  },
});

const DarkTheme: ThemeOptions = createMuiTheme({
  palette: {
    primary: { main: Colors.blue[900] },
    secondary: { main: Colors.grey[900] },
    error: { main: Colors.red[900] },
    background: {
      default: '#fff',
    },
  },
});

export default {
  dark: DarkTheme,
  light: LightTheme,
};
