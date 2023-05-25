// строковые константы
const VALIDATION_TITLE_MESSAGE_CLASSNAME = "validation__message-title-hidden";
const VALIDATION_TEXT_MESSAGE_CLASSNAME = "validation__message-text-hidden";
const VALIDATION_TITLE_MESSAGE_LIMIT = 20;
const VALIDATION_TEXT_MESSAGE_LIMIT = 100;

// структура данных
const posts = [];

// константы из html
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
const btnPublicNode = document.getElementById("public__btn");

// функции--------------------------------------------------------
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
    alert("Введите заголовок");
    return;
  }
  const text = textAreaNode.value;
  if (!textAreaNode.value) {
    alert("Введите текст");
    return;
  }
  return {
    title: title,
    text: text,
  };
}

function createPost(post) {
  const currentDate = new Date();
  const dt = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  posts.push({
    dt,
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
      <p class="post__date">${post.dt}</p>
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.text}</p>
    </div>
  `;
  });

  postsNode.innerHTML = postsHTML;
}

function validation() {
  const titleLength = titleAreaNode.value.length;
  const textLength = textAreaNode.value.length;
  const differenceTitle = titleLength - VALIDATION_TITLE_MESSAGE_LIMIT;
  const differenceText = textLength - VALIDATION_TEXT_MESSAGE_LIMIT;

  if (titleLength > VALIDATION_TITLE_MESSAGE_LIMIT) {
    validationMessageTitle.innerText = `Длина заголовка превышена на ${differenceTitle} символа(ов)`;
    validationMessageTitle.classList.remove(VALIDATION_TITLE_MESSAGE_CLASSNAME);
    btnPublicNode.setAttribute("disabled", true);
  } else {
    validationMessageTitle.classList.add(VALIDATION_TITLE_MESSAGE_CLASSNAME);
    btnPublicNode.removeAttribute("disabled");
  }
  if (textLength > VALIDATION_TEXT_MESSAGE_LIMIT) {
    validationMessageText.innerText = `Длина текста превышена на ${differenceText} символа(ов)`;
    validationMessageText.classList.remove(VALIDATION_TEXT_MESSAGE_CLASSNAME);
    btnPublicNode.setAttribute("disabled", true);
  } else {
    validationMessageText.classList.add(VALIDATION_TEXT_MESSAGE_CLASSNAME);
  }
}

// обработчики событий
publicBtnNode.addEventListener("click", addPost);
titleAreaNode.addEventListener("input", validation);
textAreaNode.addEventListener("input", validation);
