import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LikeButton = () => {
  const classes = useStyles();

  const [isLiked, setIsLiked] = useState(false);

  const handleOnClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="like" onClick={handleOnClick}>
        {isLiked ? (
          <ThumbUpAltIcon color="primary" />
        ) : (
          <ThumbUpAltOutlinedIcon color="primary" />
        )}
      </IconButton>
    </div>
  );
};

export default LikeButton;
