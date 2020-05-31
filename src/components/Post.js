import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: "75%",
    margin: "0.5em",
    display: "inline-block",
  },
  media: {
    height: 300,
  },
  bullet: {
    // display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = ({ postData }) => {
  const classes = useStyles();
  // return (
  //   <Card className={classes.root} variant="outlined">
  //     <CardContent>
  //       <Typography variant="h5" component="h2" noWrap={true}>
  //         {postData.title}
  //       </Typography>
  //       <Typography className={classes.pos} color="textSecondary" noWrap={true}>
  //         {postData.tags.toString()}
  //       </Typography>
  //       <Typography variant="body2" component="p" noWrap={true}>
  //         {postData.content}
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Link
  //         exact
  //         to={`/posts/post/${postData._id}`}
  //         style={{ textDecoration: "none" }}
  //       >
  //         <Button size="small">KEEP READING</Button>
  //       </Link>
  //     </CardActions>
  //   </Card>
  // );

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
          title={postData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {postData.title}
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
            noWrap={true}
          >
            {postData.tags.toString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {postData.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          exact
          to={`/posts/post/${postData._id}`}
          style={{ textDecoration: "none" }}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
