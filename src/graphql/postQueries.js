export const createPostQuery = ( postTitle, postContent, tagsValue ) => JSON.stringify({
    query: 
    `mutation {
        createPost(postInput: 
            {title: "${postTitle}", 
            content:"${postContent}", 
            tags:[${tagsValue}]}),
        {
            _id
        }
    }`
});

export const fetchAllPostsQuery = JSON.stringify({
    query: 
    `query{fetchAllPosts {
        _id,
        title,
        content,
        tags,
        createdAt
      }
    }`
});