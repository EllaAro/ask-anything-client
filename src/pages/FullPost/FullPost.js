import React from 'react'; 
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1em',
        marginBottom: '1em',
        border: 0,
        borderRadius: 3,
        margin: '0 auto',
        width: '70%',
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '35ch',
          }, 
    },
}));

const FullPost = (props) => {

    const classes = useStyles();

    const content = () => (
        <div>
            HIHI THIS IS THE ID {props.id}
        </div>
    )
    return (
        <div className={classes.root}>
            <Paper 
            elevation={4}
            children={content()}
            />
        </div>
    )
}

export default FullPost