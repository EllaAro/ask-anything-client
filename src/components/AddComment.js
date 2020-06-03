import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PostButton from "./PostButton";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const AddComment = () => {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <TextField
          id="input-with-icon-grid"
          label="Add a comment"
          fullWidth
          margin="normal"
        />
        <PostButton
          disabled={true}
          buttonName={"comment"}
          handleSubmit={() => console.log("hi")}
        />
      </Grid>
    </div>
  );
};

export default AddComment;
