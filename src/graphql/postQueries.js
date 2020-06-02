export const createPostQuery = (postTitle, postContent, tagsValue, imageUrl) =>
  JSON.stringify({
    query: `mutation {
        createPost(postInput: {
                title: "${postTitle}", 
                content: "${postContent}", 
                tags: [${tagsValue}],
                imageUrl: "${imageUrl}"
            }),
            {
                _id
            }
    }`,
  });

export const fetchAllPostsQuery = JSON.stringify({
  query: `query {
        fetchAllPosts {
           posts { _id,
                  title,
                  content,
                  tags,
                  createdAt}
      }
    }`,
});
