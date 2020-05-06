import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '47%',
        borderRadius: '8px',
    },
    header: {
        fontSize:'2px',
    }
})

function ProfileDetail () {
    const classes = useStyles();

    return (
       <Paper 
       className={classes.root}
       variant="outlined" 
       square
       children='hi'
       />
    )
}

export default ProfileDetail