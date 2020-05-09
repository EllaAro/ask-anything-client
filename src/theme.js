import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#aa00ff' },
    secondary: {main: '#f50057' },
  },
});

export const useStylesPaper = makeStyles((theme) => ({
  rootPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1em',
    borderRadius: 3,
    textAlign:'center',
  },
}));

export default theme;


