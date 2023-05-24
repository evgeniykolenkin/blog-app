const VALIDATION_TITLE_MESSAGE_CLASSNAME = "validation__message-title-hidden";
const VALIDATION_TEXT_MESSAGE_CLASSNAME = "validation__message-text-hidden";

const posts = [];

const publicBtnNode = document.getElementById("public__btn");
const titleAreaNode = document.getElementById("title");
const textAreaNode = document.getElementById("text");
const postsNode = document.getElementById("posts");
const validationMessageTitle = document.getElementById(
  "validation__message-title"
);
const validationMessageText = document.getElementById(
  "validation__message-text"
);

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

function lengthTitleCheck(event) {
  const currentValue = event.target.value;
  if (currentValue.length > 20) {
    validationMessageTitle.classList.remove(VALIDATION_TITLE_MESSAGE_CLASSNAME);
  } else {
    validationMessageTitle.classList.add(VALIDATION_TITLE_MESSAGE_CLASSNAME);
  }
}

function lengthTextCheck(event) {
  const currentValue = event.target.value;
  if (currentValue.length > 100) {
    validationMessageText.classList.remove(VALIDATION_TEXT_MESSAGE_CLASSNAME);
  } else {
    validationMessageText.classList.add(VALIDATION_TEXT_MESSAGE_CLASSNAME);
  }
}

// обработчики событий
publicBtnNode.addEventListener("click", addPost);
titleAreaNode.addEventListener("input", lengthTitleCheck);
textAreaNode.addEventListener("input", lengthTextCheck);
