import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactionsData from '../../useTransactionsData';

import useStyles from './Trackers-styles';

const Trackers = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactionsData(title);

    return (
        <Card className={title === "Income" ? classes.incomes : classes.expenses}>
            <CardHeader title={title} className={classes.heading} />
            <CardContent>
                <Typography variant="h6" className={classes.balance}>${total}</Typography>
                <Doughnut className={classes.donut} data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Trackers;
