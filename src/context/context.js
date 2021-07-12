import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ type: 'Income', category: 'Salary', amount: 5000, date: new Date(), id: '1'}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) =>{
        const [transactions, dispatch] = useReducer(contextReducer, initialState)

        //action constroctors, like in redux
        const deleteTransaction = (id) => {
            dispatch({ type: 'DELETE_TRANSACTION', payload: id});
        }
        const addTransaction = (transaction) => {
            dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
        }

        const balance = transactions.reduce((acc, currVal) => {
            return (currVal.type === 'Income' ? acc + currVal.amount : acc - currVal.amount)
        }, 0);


        return (
            <ExpenseTrackerContext.Provider value={{ 
                deleteTransaction,
                addTransaction,
                transactions,
                balance
             }}>
                {children}
            </ExpenseTrackerContext.Provider>
        )
}