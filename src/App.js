import React from 'react';
import { Grid } from '@material-ui/core';
import Trackers from './components/Details/Trackers';
import Main from './components/Main-Window/Main';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="stretch" justify="center" styles={{ height: '100vh' }}>
        <Grid item xs={12} md={6} >
            <Main />
        </Grid>
        <Grid className={classes.miniGrid} container spacing={2} justify="center">
           <Grid item xs={11} md={4} >
               <Trackers title="Income"/>
           </Grid>
           <Grid item xs={11} md={4} >
               <Trackers title="Expense"/>
           </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;