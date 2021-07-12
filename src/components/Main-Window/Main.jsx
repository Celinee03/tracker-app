import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';
import List from './Lists/List';

import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './main-styles'

//the upper-window, where we manage the transactions
const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="All your transactions in one place!" />
            <CardContent>
                <Typography align="center" variant="h5" gutterBottom>Your balance is: ${balance}</Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.mainCardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>   
                </Grid>          
            </CardContent>
        </Card>
    )
}

export default Main;
