const URL_BASE = "https://reactsessions-ac545.firebaseio.com/equipotres/";

const getPosts = async () => {
  const response = await fetch(`${URL_BASE}.json`);
  const posts = await response.json();

  return posts;
};

const getPost = async (id) => {
  console.log(`${URL_BASE}${id}.json`);
  const response = await fetch(`${URL_BASE}${id}.json`);
  const post = await response.json();

  return post;
};

const addPost = async (request) => {
  const response = await fetch(`${URL_BASE}.json`, {
    method: "POST",
    body: JSON.stringify(request),
  });
  const user = await response.json();

  return user;
};

export { getPosts, getPost, addPost };
