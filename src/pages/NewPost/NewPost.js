import React, { useState }from 'react'
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PostButton from '../../components/PostButton';
import TagsAutoComplete from '../../components/TagsAutoComplete';
import {useStylesPaper} from '../../theme';
import { makeStyles } from '@material-ui/core/styles';

const NewPost = () => {
    
    const [ postName, setPostName ] = useState('');
    const [ postContent, setPostContent ] = useState('');
    const [ postButton, setPostButton ] =useState('Post');

    const handlePostNameChange = (event) => {
        setPostName(event.target.value);
    }

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    }

    const handleSubmitPost = () => {
        setTimeout(()=> {

        },3000);
    }
    
    return (
        <Paper 
            className={useStylesPaper().rootPaper}
            elevation={4}
            >
            <Container >
                <br/>
                <Typography variant="h4">Add A New Post</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    name='postName'
                    label='Post Name'
                    value={postName}
                    onChange={handlePostNameChange}  
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name='postContent'
                    label='post Content'
                    multiline
                    rows={5}
                    defaultValue="Default Value"
                    variant="outlined"
                    value={postContent}
                    onChange={handlePostContentChange}  
                />
                <TagsAutoComplete />
                <PostButton buttonName={postButton} handleSubmit={handleSubmitPost}/>
            </Container>        
        </Paper> 
        )
}

export default NewPost