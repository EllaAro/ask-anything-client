const initialState = []

export const createPost = (postDetails) => {

    const graphqlQuery = {
        query: `
        mutation {
            createPost(postInput: {title: "${postDetails.postTitle}", content:"${postDetails.postContent}", tags:["hi"]}) {
                content
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
                post: resData
            }))
            .catch(err => console.log(err));
    }
}

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case "CREATE_POST":
            return action.post
        default:
            return state    
    }
}