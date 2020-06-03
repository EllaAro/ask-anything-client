export const createCommentQuery = (postId, content) =>
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

export const fetchCommentsQuery = (postId) =>
  JSON.stringify({
    query: `query {
      fetchAllComments(fetchCommentsInput: {
          postId: "${postId}", 
          }),
          {
            comments {
              _id,
              firstName,
              lastName,
              content,
              createdAt,
            }
          }
  }`,
  });
