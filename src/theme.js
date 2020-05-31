import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#aa00ff" },
    secondary: { main: "#f50057" },
  },
});

export const useStylesPaper = makeStyles((theme) => ({
  rootPaper: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "5em",
    borderRadius: 3,
    textAlign: "center",
    marginLeft: "50px",
  },
}));

export default theme;
