let createPostBtn = document.querySelector('.header-post');
let textAreaPopup = document.querySelector('.post-popup');
let postCreateForm = document.querySelector('.post-create');
let cancelBtn = document.querySelector('.cancel-btn');
let postSection = document.querySelector('.post-section');
let postBox = document.querySelector('.post-box');
let commentForm = document.querySelector('.comment-form');

function openPopup(){
    textAreaPopup.style.display = "block";
}

function closePopup(){
    textAreaPopup.style.display = "none";
}

function createPost(event)
{
    event.preventDefault();
    let postData = new FormData(event.target);
    let postContent = postData.get('post-content');
    closePopup();
    postCreateForm.reset();
    let newPostBox = postBox.cloneNode(true);
    newPostBox.children[1].textContent = postContent;
    postSection.prepend(newPostBox);
}

function createComment(event)
{
    event.preventDefault();
    let commentData = new FormData(event.target);
    let commentContent = commentData.get('comment-content');
    let commentTextElement = document.createElement('p');
    commentTextElement.classList.add("comment-text");
    commentTextElement.textContent = commentContent;
    event.target.parentElement.append(commentTextElement);
    commentForm.reset();
}

createPostBtn.addEventListener('click',openPopup);
cancelBtn.addEventListener('click',closePopup);
postCreateForm.addEventListener('submit',createPost);
commentForm.addEventListener('submit',createComment);