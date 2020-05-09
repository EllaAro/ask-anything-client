import React from 'react'
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {useStylesPaper} from '../../theme'
const useStyles = makeStyles((theme) => ({
  
}));

const NewPost = () => {
    
    const classes = useStyles();

    return (
        <Paper 
            className={useStylesPaper().rootPaper}
            elevation={4}
            >
            <Container >
                <Typography  variant="h4">Add A New Post</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    name='postName'
                    label='Post Name'
                    value='postName'  
                />
            </Container>        
        </Paper> 
        )
}

export default NewPost