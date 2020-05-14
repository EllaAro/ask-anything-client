const initialState = [];

const fromArrToSqlArr = (arr) => {
    let returnVal = ``;
    arr.forEach(element => returnVal+=`"${element.title}", `)
    return returnVal;
}

export const createPost = (postDetails) => {
    const graphqlQuery = {
        query: 
        `mutation {
            createPost(postInput: 
                {title: "${postDetails.postTitle}", 
                content:"${postDetails.postContent}", 
                tags:[${fromArrToSqlArr(postDetails.tagsValue)}]}),
            {
                _id
            }
        }`
    };
    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(graphqlQuery)
            })
            .then(res => res.json())
            .then(resData => dispatch({
                type: "CREATE_POST",
                post: resData.data.createPost
            }))
            .catch(err => console.log(err));
    };
}

export const fetchAllPosts = () => {
    const graphqlQuery = {
        query: 
        `query{fetchAllPosts {
            _id,
            title,
            content,
            tags,
            createdAt
          }
        }`
    };
    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(graphqlQuery)
            })
            .then(res => res.json())
            .then(resData => dispatch({
                type: "FETCH_ALL_POSTS",
                posts: resData.data.fetchAllPosts
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