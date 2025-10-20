const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPosts() {
  const mainElement = document.querySelector("main");

  mainElement.innerHTML = posts
    .map(
      (post) => `
      
      <article class="post" aria-labelledby="post-author">
            <div class="container-post">
              <img
                class="avatar"
                src="${post.avatar}"
                alt="Avatar of Vincent van Gogh in gradient red and blue background"
              />
              <div class="block">
                <h2>${post.name}</h2>
                <p class="location">${post.location}</p>
              </div>
            </div>
    
            <figure class="post-media">
              <img
                class="post-image"
                src="${post.post}"
                alt="Self‑portrait painting posted by Vincent van Gogh"
              />
            </figure>
    
            <div class="post-reactions" aria-label="Post reactions">
              <button type="button" id="btn-icon" class="btn-icon btn-like" aria-label="btn-like">
                <img src="images/icon-heart.png" alt="heart">
              </button>
              <button type="button" class="btn-icon btn-comment" aria-label="btn-comment">
                <img src="images/icon-comment.png" alt="comment">
              </button>
              <button type="button" class="btn-icon btn-send" aria-label="btn-comment">
                <img src="images/icon-dm.png" alt="send">
              </button>
            </div>
    
            <section class="post-meta" aria-label="Engagement">
              <p class="likes"><strong>${post.likes}</strong> likes</p>
            </section>
    
            <section class="post-caption" aria-label="Caption">
              <h3 class="username">${post.username}</h3>
              <p class="user-comment">${post.comment}</p>
            </section>
          </article>
        `
    )
    .join("");
}

renderPosts();

// function increaseLike() {
//     let btnIcon = document.getElementById("btn-icon");

//     btnIcon.addEventListener("click", () => {
//      posts[0].likes--;
       
//     })
// }

// increaseLike()
