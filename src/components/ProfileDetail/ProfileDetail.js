import React from 'react';
import { Card, 
        CardContent,
        CardHeader, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '47%',
        borderRadius: '8px',
    },
    header: {
        fontSize:'50%',
    }
})

function ProfileDetail () {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader title='Profile Detail'/>
            <CardContent>
            </CardContent>
        </Card>
    )
}

export default ProfileDetail