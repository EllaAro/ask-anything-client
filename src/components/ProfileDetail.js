import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '47%',
        borderRadius: '8px',
        marginBottom: '1em',
    },
    header: {
        fontSize:'18px',
        marginTop: '1em',
    }
})

const ProfileDetail = () => {

    const classes = useStyles();
    
    const content = () => (
        <div>
            <header className={classes.header}>Detail</header>
            <p>Number of Detail Info</p>
        </div>
    );

    return (
       <Paper 
       className={classes.root}
       variant="outlined" 
       square
       children={content()}
       />
    )
}

export default ProfileDetail