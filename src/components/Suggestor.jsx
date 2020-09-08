// @flow
/* -----------------------  Globals ------------------ */
import React, { useState } from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Icons ------------------ */
import { Shuffle } from 'mdi-material-ui';

/* -----------------------  Utils ------------------ */
import { movies } from '../utils';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  button: String,
}
type Props = {
  classes: Classes,
}

/* -----------------------  Component ------------------ */
const Suggestor = (props: Props) => {
  const {
    classes,
  } = props;
  const [selectedMovie, setSelectedMovie] = useState('none');
  const [selectedYear, setSelectedYear] = useState('none');

  const generateRandomMovie = () => {
    const randomNumber = (Math.floor(Math.random() * 1000)) % movies.length;
    return movies[randomNumber];
  };

  const handleButtonClick = () => {
    const randomMovie = generateRandomMovie();
    setSelectedMovie(randomMovie.Name);
    setSelectedYear(randomMovie.Year);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="10vh"
      minWidth="300px"
    >
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleButtonClick}
      >
        Select Random Movie
        <Shuffle />
      </Button>
      {`The movie from the box is ${selectedMovie} (${selectedYear})`}
    </Box>
  );
};

export default withStyles(styles)(Suggestor);
