import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import PostButton from "../components/PostButton";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useStylesPaper } from "../theme";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: "0.5em",
  },
  textField: {
    marginBottom: "1.5em",
    marginLeft: "1.5em",
  },
  img: {
    margin: "0 auto",
    marginTop: "1em",
    width: theme.spacing(23),
    height: theme.spacing(21),
  },
}));

const PrivateSettings = () => {
  const [title, setTitle] = useState("Private Settings");
  const [buttonText, setButtonText] = useState("Edit");
  const [isEdit, setIsEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const initialUserInfo = useSelector((state) => state.privateSettings);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setUserInfo(initialUserInfo);
  }, []);

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit((prevIsEdit) => !prevIsEdit);
      setTitle("Edit Private Settings");
      setButtonText("Done");
    } else {
      //dispatch new info to store
      setIsEdit((prevIsEdit) => !prevIsEdit);
      setTitle("Private Settings");
      setButtonText("Edit");
    }
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, [name]: [value] };
    });
  };

  return (
    <Paper className={useStylesPaper().rootPaper} elevation={4}>
      <Container>
        <Typography variant="h4" className={classes.header}>
          {title}
        </Typography>
        <Avatar alt="User Photo" className={classes.img} />
        <TextField
          name="firstName"
          label="First Name"
          className={classes.textField}
          onChange={handleTextChange}
          value={userInfo.firstName}
          InputProps={isEdit ? {} : { readOnly: true }}
        />
        <TextField
          name="lastName"
          label="Last Name"
          className={classes.textField}
          onChange={handleTextChange}
          value={userInfo.lastName}
          InputProps={isEdit ? {} : { readOnly: true }}
        />
        <PostButton buttonName={buttonText} handleSubmit={handleEdit} />
      </Container>
    </Paper>
  );
};

export default PrivateSettings;
