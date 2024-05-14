import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    width: '100%',
    overflow: 'visible',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: '240px',
    },
  },
  contentContainer: {
    background: theme.palette.mode === 'dark' && 'rgb(18, 18, 18)',
  },
}));
