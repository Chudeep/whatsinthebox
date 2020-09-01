import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#29b6f6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    contrastText: {
      main: '#fff',
    },
  },
});

export default theme;
