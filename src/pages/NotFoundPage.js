import React from "react";
import { Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { useStylesPaper } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "150%",
  },
  content: {
    margin: "1.5em",
  },
});

const notFoundContent = () => (
  <div>
    <Typography variant="h2">404</Typography>
    <Typography variant="h5">Page not found</Typography>
  </div>
);

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Paper
      elevation={4}
      className={`${useStylesPaper().rootPaper} ${classes.root}`}
    >
      <Container className={classes.content}>{notFoundContent()}</Container>
    </Paper>
  );
};

export default NotFoundPage;
