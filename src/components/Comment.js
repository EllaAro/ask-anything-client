import React from "react";
import { Avatar, Grid } from "@material-ui/core";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Comment = () => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar alt="Remy Sharp" src={imgLink} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
        <p style={{ textAlign: "left" }}>dummy text. </p>
        <p style={{ textAlign: "left", color: "gray" }}>posted 1 minute ago</p>
      </Grid>
    </Grid>
  );
};

export default Comment;
