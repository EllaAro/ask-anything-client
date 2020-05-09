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
import {useStylesPaper} from '../../theme'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

const NewPost = () => {
    
    const classes = useStyles();

    const [ postName, setPostName ] = useState('');
    const [ postContent, setPostContent ] = useState('');
    const [ categories, setCategories ] = useState({
        ComputerScience: false,
        Psychology: false,
        Sport: false,
      });
    const [ postButton, setPostButton ] =useState('Post');
    const { ComputerScience, Psychology, Sport } = categories;

    const handlePostNameChange = (event) => {
        setPostName(event.target.value);
    }

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    }

    const handleTagsChange = (event) => {
        setCategories({ ...categories, [event.target.name]: event.target.checked });
      };
    
    const handleSubmitPost = () => {
        setTimeout(()=> {

        },3000);
    }
    
    const error = [ComputerScience, Psychology, Sport].filter((v) => v).length < 2;

    const tags = (
        <div className={classes.root}>
            <FormControl component='fieldset' className={classes.formControl}>
            </FormControl>
            <FormControl required error={error} component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Pick atleast two tags</FormLabel>
                <FormGroup row='true'>
                    <FormControlLabel
                        control={<Checkbox checked={ComputerScience} onChange={handleTagsChange} name='ComputerScience' />}
                        label='Computer Science'
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Psychology} onChange={handleTagsChange} name='Psychology' />}
                        label='Psychology'
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Sport} onChange={handleTagsChange} name='Sport' />}
                        label='Sport'
                    />
                </FormGroup>
            </FormControl>
        </div>
    )

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
                {tags}
                <PostButton buttonName={postButton} handleSubmit={handleSubmitPost}/>
            </Container>        
        </Paper> 
        )
}

export default NewPost