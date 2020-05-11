import React, { useState } from 'react'
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import PostButton from '../../components/PostButton';
import TagsAutoComplete from '../../components/TagsAutoComplete';
import {useStylesPaper} from '../../theme';
import { useDispatch } from "react-redux"
import { createPost } from '../../redux/posts';

const NewPost = () => {
    const dispatch = useDispatch();
    const [ postTitle, setPostTitle ] = useState('');
    const [ postContent, setPostContent ] = useState('');
    const [ postButton, setPostButton ] =useState('Post');

    const handlePostTitleChange = (event) => {
        setPostTitle(event.target.value);
    }

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    }

    const handleSubmitPost = () => {
        dispatch(createPost({postTitle,postContent}));
    }
    
    return (
        <Paper 
            className={useStylesPaper().rootPaper}
            elevation={4}
            >
            <Container >
                <br/>
                <Typography variant="h4">Create Post</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    name='postTitle'
                    label='Post Name'
                    value={postTitle}
                    onChange={handlePostTitleChange}  
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