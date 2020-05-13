import React, { useState } from 'react'
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import PostButton from '../components/PostButton';
import TagsAutoComplete from '../components/TagsAutoComplete';
import {useStylesPaper} from '../theme';
import { useDispatch } from "react-redux"
import { createPost } from '../redux/posts';

const VALID_CONTENT_LENGTH = 150;
const VALID_TITLE_LENGTH = 5;
const MIN_VALID_CONTENT_LENGTH = 10;

const categories = [ //this is dummy data
    { title: 'Sport', id: 1 },
    { title: 'News', id: 2 },
    { title: 'Art', id: 3 },
    { title: 'Cooking', id: 4 },
    { title: 'TV Shows', id: 5 },
  ];

const NewPost = () => {
    
    const dispatch = useDispatch();
    const [ postTitle, setPostTitle ] = useState('');
    const [ postContent, setPostContent ] = useState('');
    const fixedOptions = [];
    const [tagsValue, setTagsValue] = useState([]);
    const [ postButton, setPostButton ] = useState('Post');
    const [enablePost , setEnablePost ] = useState(false);

    const handlePostTitleChange = (event) => {
        setPostTitle(event.target.value);
    }

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    }

    const handleTagsChange = (event, newValue) => {
        setTagsValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }

    const handleSubmitPost = () => {
        if (isTitleValid() && isContentValid()) {
            setPostButton('Sending');
            setEnablePost(true);
            dispatch(createPost({ postTitle, postContent, tagsValue }))
            .then(res => {
                resetValues();
            });
        }
    }

    const resetValues = () => {
        setPostButton('Post');
        setEnablePost(false);
        setPostTitle('');
        setPostContent('');
        setTagsValue([]);
    }

    const isTitleValid = () => {
        return postTitle.length >= VALID_TITLE_LENGTH
    }

    const isContentValid = () => {
        return  postContent.length > MIN_VALID_CONTENT_LENGTH && postContent.length < VALID_CONTENT_LENGTH 
    }

    const helpTextPostContent = () => {
        if(!postContent) return `${VALID_CONTENT_LENGTH} characters left.`
        else if (postContent.length > VALID_CONTENT_LENGTH) return `Content is too long. Make it less than ${VALID_CONTENT_LENGTH} characters.`;
        else if (postContent.length < MIN_VALID_CONTENT_LENGTH) return `The content of the post cannot be less than ${MIN_VALID_CONTENT_LENGTH} characters.`
        else return `${VALID_CONTENT_LENGTH - postContent.length} characters left.`
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
                    error={!isTitleValid() && postTitle}
                    helperText={isTitleValid() || !postTitle ? '' : `Title too short. Make it atleast ${VALID_TITLE_LENGTH} characters long.`}
                    fullWidth
                    margin="normal"
                    name='postTitle'
                    label='Post Name'
                    value={postTitle}
                    onChange={handlePostTitleChange}  
                />
                <TextField
                    error={!isContentValid() && postContent}
                    helperText={helpTextPostContent()}
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
                <TagsAutoComplete 
                    error
                    categories={categories}
                    fixedOptions={fixedOptions}
                    value={tagsValue}
                    setValue={setTagsValue}
                    handleChange={handleTagsChange}
                />
                <PostButton 
                    disabled={enablePost}
                    buttonName={postButton} 
                    handleSubmit={handleSubmitPost}
                />
            </Container>        
        </Paper> 
        )
}

export default NewPost