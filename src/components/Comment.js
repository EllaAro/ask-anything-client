import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  name: { margin: 0, textAlign: "left" },
  content: { textAlign: "left" },
  date: { textAlign: "left", color: "gray" },
});

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Comment = ({ userInfo }) => {
  const classes = useStyles();
  const { content, createdAt, firstName, lastName } = userInfo;
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar alt="Remy Sharp" src={imgLink} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 className={classes.name}>{`${firstName} ${lastName}`}</h4>
        <p className={classes.content}>{content} </p>
        <p className={classes.date}>posted at ${createdAt}</p>
      </Grid>
    </Grid>
  );
};

export default Comment;
