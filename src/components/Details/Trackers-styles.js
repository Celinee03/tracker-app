import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    heading: {
        fontSize: `1rem`,
        textDecoration: `underline`,
    },
    balance: {
        fontSize: `2rem`,
        fontWeight: `bold`,
    },
    incomes: {
        borderBottom: `solid 10px rgba(0, 255, 0, .5)`,
        borderLeft: `solid 1px rgba(0, 255, 0, .5)`,
    },
    expenses: {
        borderBottom: `solid 10px rgba(255, 0, 0, .5)`,
        borderLeft: `solid 1px rgba(255, 0, 0, .5)`,
    },
    donut: {
        minWidth: `10rem`,
        minHeight: `10rem`,
        maxWidth: `20rem`,
        maxHeight: `20rem`,
        alignSelf: `center`,
    }
}));