const fromArrToQlArr = (arr) => {
  let returnVal = ``;
  arr.forEach((element) => (returnVal += `"${element.title}", `));
  return returnVal;
};

export const createPostQuery = (
  postTitle,
  postContent,
  tagsValue,
  imageUrl
) => {
  const tags = fromArrToQlArr(tagsValue);

  return JSON.stringify({
    query: `mutation {
        createPost(postInput: {
                title: "${postTitle}", 
                content: "${postContent}", 
                tags: [${tags}],
                imageUrl: "${imageUrl}"
            }),
            {
                _id,
                title,
                content,
                tags,
                imageUrl,
                createdAt
            }
    }`,
  });
};

export const fetchAllPostsQuery = JSON.stringify({
  query: `query {
        fetchAllPosts {
           posts { _id,
                  title,
                  content,
                  tags,
                  imageUrl,
                  createdAt}
      }
    }`,
});

export const fetchAllPostsByUserIdQuery = JSON.stringify({
  query: `query {
    fetchAllUserPosts {
           posts { _id,
                  title,
                  content,
                  tags,
                  imageUrl,
                  createdAt}
      }
    }`,
});

export const fetchRecommendedUserPostsQuery = JSON.stringify({
  query: `query {
    fetchRecommendedUserPosts {
           posts { _id,
                  title,
                  content,
                  tags,
                  imageUrl,
                  createdAt}
      }
    }`,
});

export const fetchTendingUserPostsQuery = JSON.stringify({
  query: `query {
    fetchTrendingPosts {
           posts { _id,
                  title,
                  content,
                  tags,
                  imageUrl,
                  createdAt}
      }
    }`,
});
