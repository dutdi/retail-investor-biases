import React from 'react';
import { Typography } from '@material-ui/core';
import { BiasEducationCenter } from '../helpers/BiasEducationCenter';

const Result = () => {
  console.log(JSON.stringify(BiasEducationCenter));

  return (
    <div>
      <Typography variant='h4' gutterBottom>
        Result
      </Typography>{' '}
    </div>
  );
};

export default Result;
