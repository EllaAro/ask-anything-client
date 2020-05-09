import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '31%',
    margin: '0.5em',
    display: 'inline-block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = ({postData}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {postData.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {postData.tags}
                </Typography>
                <Typography 
                    variant="body2" 
                    component="p" 
                    noWrap={true} 
                >
                    {postData.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Link exact to={`/posts/post/${postData.id}`} style={{textDecoration: 'none'}}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Post