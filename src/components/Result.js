import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { BiasEducationCenter } from '../data/BiasEducationCenter';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4, 0, 0, 0),
    },
    width: '1200px',
    height: '700px',
    margin: '50px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  paper: {
    height: 450,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
}));

function createData(biasName, biasTips) {
  return { biasName, biasTips };
}

const Result = ({ biases }) => {
  const classes = useStyles();
  //console.log(JSON.stringify(BiasEducationCenter));
  console.log('biases: ' + biases);
  const rows = [];
  for (var i = 0; i < biases.length; i++) {
    const name = BiasEducationCenter[i].bias.slice(
      9,
      BiasEducationCenter[i].bias.length
    );
    const tips = BiasEducationCenter[i].tips
      .split('\n')
      .map((str) => <p>{str}</p>);
    rows.push(createData(name, tips));
  }

  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ backgroundColor: '#0065bd', color: 'white' }}
      >
        Result
      </Typography>
      <Typography variant='h5' gutterBottom>
        You tend to show the following biases:
      </Typography>
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Bias</TableCell>
                <TableCell align='center'>Tips</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.biasName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.biasName}
                  </TableCell>
                  <TableCell align='left'>{row.biasTips}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br></br>
      <br></br>
      <Typography
        component={Link}
        to='/feedback'
        variant='h5'
        gutterBottom
        style={{ textDecoration: 'none', color: '#0065bd' }}
      >
        Was this helpful? <b>Let us know what you think!</b>
      </Typography>
    </div>
  );
};

export default Result;
