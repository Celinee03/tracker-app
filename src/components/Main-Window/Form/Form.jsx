import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './form-style';
import { incomeCategories, expenseCategories } from '../../../items/categories';
import formatDate from './formatDate';

//blank form at mounting
const initialState = {
    type: '',
    category: '',
    amount: '',
    date: formatDate(new Date()),
};

// the form; 4 input fields: 2 selects, 1 number, 1 date (the date is formatted)
const Form = () => {
    const classes = useStyles();
    //add transaction function in the button
    const { addTransaction } = useContext(ExpenseTrackerContext);
    //the data for the form, taken from the input fields on change
    const [formData, setformData] = useState(initialState);

    //function to create a transaction
    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: Date.now().toString(10) }

        addTransaction(transaction);
        setformData(initialState);
    };

    //different categories options, from the items folder,  for the income and the expense type
    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography align="center" variant="subtitle2" gutterBottom>
                Add a new transaction:
              </Typography>
          </Grid>  
          <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>
                        Type:
                    </InputLabel>
                    <Select value={formData.type} onChange={(e) => setformData({ ...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
              </Grid> 
              <Grid item xs={6}>
                  <FormControl fullWidth>
                      <InputLabel>Category:</InputLabel>
                        <Select value={formData.category} onChange={(e) => setformData({ ...formData, category: e.target.value})}>
                            {/* checking the type to pick the correct categories */}
                          {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)} 
                        </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={6}>
                  <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setformData({ ...formData, amount: e.target.value})} fullWidth></TextField>
              </Grid> 
              <Grid item xs={6}>
                  <TextField type="date" label="Date" value={formData.date} onChange={(e) => setformData({ ...formData, date: formatDate(e.target.value)})} fullWidth></TextField>
              </Grid> 
              <Grid container alignItems="center" justify="center">
                <Button className={classes.button} variant="outline" onClick={createTransaction} >Create</Button>
              </Grid>
        </Grid>
    )
}

export default Form;
