// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import Typography from '@material-ui/core/Typography';

/* -----------------------  Components ------------------ */
const Index = () => {
  const title = "What's in the box";
  return (
    <>
      <Typography variant="h3">
        {title}
      </Typography>
    </>
  );
};

export default Index;
