import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    margin: {
        marginBottom: '2em',
        '&:hover': {
            backgroundColor: '##ea80fc',
            color: '#FFF'
        }
    },
  }));

const PostButton = props => {
    const classes = useStyles();
    
    return (
        <div>
            <Button 
                variant='contained' 
                color='primary'
                size='medium'
                className={classes.margin}
                type='submit'
                onClick={props.handleSubmit}
            >
                {props.buttonName}
            </Button>
        </div>
    )
}

export default PostButton