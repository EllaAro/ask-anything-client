export const createCommentQuery = (content, postId) =>
  JSON.stringify({
    query: `mutation {
        createComment(commentInput: {
            postId: "${postId}", 
            content: "${content}", 
            }),
            {
                _id
            }
    }`,
  });
