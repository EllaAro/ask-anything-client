import React from 'react'; 
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useStylesPaper} from '../theme';
import Container from '@material-ui/core/Container';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
    
}));

//this will be replaced with a call to the backend

const POSTS_FROM_SERVER = [
    {name: 'Post Number 1',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 1,
    },
    {name: 'Post Number 2',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 2,   
    },
    {name: 'Post Number 3',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 3,    
    },
    {name: 'Post Number 4',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 4,    
    },
    {name: 'Post Number 5',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 5,    
    },
    {name: 'Post Number 6',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 5,    
    },
  
]

const Posts = () => {

    const classes = useStyles();
    const posts = POSTS_FROM_SERVER.map(post => (<Post postData={post} />))
    
    return (
        <Paper 
            className={useStylesPaper().rootPaper}
            elevation={4}
        >
            <Container>
                <br/>
                {posts}
                <br/>
            </Container>
        </Paper>
     )
}

export default Posts