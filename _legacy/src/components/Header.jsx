// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  useTheme,
  Box,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Styles ------------------ */
const styles = () => ({
  header: {
    height: 200,
  },
});

/* -----------------------  Components ------------------ */
const Header = () => {
  const title = "What's in the box?";
  const theme = useTheme();
  return (
    <Box
      height="10vh"
      bgcolor={theme.palette.primary.main}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h3"
        color={theme.palette.contrastText.main}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default withStyles(styles)(Header);
