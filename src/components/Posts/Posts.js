import React from 'react'; 
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Post from '../Post/Post';

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

//this will be replaced with a call to the backend

const POSTS_FROM_SERVER = [
    {name: 'Post Number 1',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...',
    id: 1,
    },
    {name: 'Post Number 2',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...'    
    },
    {name: 'Post Number 3',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...'    
    },
    {name: 'Post Number 4',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...'    
    },
    {name: 'Post Number 5',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...'    
    },
    {name: 'Post Number 6',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...'    
    },
    {name: 'Post Number 7',
    body: ' This is basically the body of the Post its basically the body of this Post it is actually.',
    tags: 'tag1, tag2, tag3...'    
    },
]

const Posts = () => {

    const classes = useStyles();
    const posts = POSTS_FROM_SERVER.map(post => (<Post postData={post} />))
    
    const content = () => (
        <div>
            <br/>
            {posts}
            <br/>
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

export default Posts