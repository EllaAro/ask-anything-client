import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { convertTimezone } from "../utils/helperHandler";

const useStyles = makeStyles({
  name: {
    margin: 0,
    textAlign: "left",
  },
  content: {
    textAlign: "left",
  },
  date: {
    textAlign: "left",
    color: "gray",
  },
});

const Comment = ({ userInfo }) => {
  const classes = useStyles();
  const { content, createdAt, firstName, lastName } = userInfo;
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar alt="Remy Sharp" />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 className={classes.name}>{`${firstName} ${lastName}`}</h4>
        <p className={classes.content}>{content} </p>
        <p className={classes.date}>posted at {convertTimezone(createdAt)}</p>
      </Grid>
    </Grid>
  );
};

export default Comment;
