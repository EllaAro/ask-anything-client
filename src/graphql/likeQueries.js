export const likePostQuery = (postId) =>
  JSON.stringify({
    query: `mutation {
        likePost(likePostInput: {
            postId: "${postId}", 
            }),
            {
                _id,
            }
    }`,
  });

export const unlikePostQuery = (postId) =>
  JSON.stringify({
    query: `mutation {
        unLikePost(likePostInput: {
            postId: "${postId}", 
            }),
            {
                _id,
            }
    }`,
  });

export const fetchLikedPostsQuery = () => {
  JSON.stringify({
    query: `query {
      fetchLikedPosts {
            likes 
          }
  }`,
  });
};
