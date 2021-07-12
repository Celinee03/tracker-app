import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  miniGrid: {
    direction: 'column',
    alignItems: 'center',
    justify: 'center',
    [theme.breakpoints.up('md')]: {
      direction: 'row',
      alignItems: 'center',
      justify: 'stretch',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  grid: {
    '& > *': {
      marginTop: '5%',
      margin: theme.spacing(2),
    },
  },
}));