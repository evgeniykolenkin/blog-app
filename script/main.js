const posts = [];

const publicBtnNode = document.getElementById("public__btn");
const titleAreaNode = document.getElementById("title");
const textAreaNode = document.getElementById("text");
const postsNode = document.getElementById("posts");

function addPost() {
  const postFromUser = getPostFromUser();
  createPost(postFromUser);
  render();
  renderPosts();
}

function render() {
  titleAreaNode.value = "";
  textAreaNode.value = "";
}

function getPostFromUser() {
  const title = titleAreaNode.value;
  if (!titleAreaNode.value) {
    alert("Введи член, ой заголовок");
    return;
  }
  const text = textAreaNode.value;
  if (!textAreaNode.value) {
    alert("Введи текст, ой член");
    return;
  }
  return {
    title: title,
    text: text,
  };
}

function createPost(post) {
  posts.push({
    title: post.title,
    text: post.text,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();
  let postsHTML = "";
  posts.forEach((post) => {
    postsHTML += `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.text}</p>
    </div>
  `;
  });

  postsNode.innerHTML = postsHTML;
}

publicBtnNode.addEventListener("click", addPost);
