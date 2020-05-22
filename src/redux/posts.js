import { createPostQuery,
        fetchAllPostsQuery,
       } from '../graphql/postQueries';
const initialState = [];

const fromArrToQlArr = (arr) => {
    let returnVal = ``;
    arr.forEach(element => returnVal+=`"${element.title}", `)
    return returnVal;
}

export const createPost = ({ postTitle, postContent, tagsValue, userId, token }) => {
    
    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',

                },
                body: createPostQuery( postTitle, postContent, fromArrToQlArr(tagsValue) )
            })
            .then(res => res.json())
            .then(resData => {
                if ( resData.errors && resData.errors[0].status === 401 ) throw new Error ( `Posting a post has failed, invalid input!` );
                if ( resData.errors ) throw new Error (`Post creation has failed`);

                return dispatch({
                type: "CREATE_POST",
                post: resData.data.createPost
                })
            });
    };
}

export const fetchAllPosts = () => {
    
    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: fetchAllPostsQuery
            })
            .then(res => res.json())
            .then(resData => dispatch({
                type: "FETCH_ALL_POSTS",
                posts: resData.data.fetchAllPosts.posts
            }))
            .catch(err => console.log(err));
    }
}

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case "CREATE_POST":
            return [...state, action.post];
        case "FETCH_ALL_POSTS":
            return action.posts;
        default:
            return state    
    }
}