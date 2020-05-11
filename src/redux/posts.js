const initialState = []

export const createPost = (postDetails) => {
    console.log(postDetails);

    const graphqlQuery = {
        query: `
        mutation {
            createPost(postInput: {title: "${postDetails.postTitle}", content:"${postDetails.content}"}) {
                content
            }
        }`
    };

    fetch('http://localhost:8080/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(graphqlQuery)
    })
    .then(res => res.json())
    .then(resData => {
        return (dispatch) => {
            dispatch({
                type: "CREATE_POST",
                post: resData
            });
        }
    })
}

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case "CREATE_POST":
            return action.post
        default:
            return state    
    }
}