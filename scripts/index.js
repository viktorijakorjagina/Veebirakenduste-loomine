const feed = document.querySelector(".feed");

// Task 4: Fetch posts from online JSON
//fetch("https://gist.githubusercontent.com/viktorijakorjagina/3545a59eab81bd07c7a3a848d84480e1/raw/e3c9f2ecabb0279dd77ea6402b81de7b7c79d928/posts.json")

// Task 5: Fetch from local JSON
fetch("posts.json")
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const article = document.createElement("article");
            article.classList.add("post");

            const postHeader = document.createElement("header");
            postHeader.classList.add("post-header");
            
            const avatar = document.createElement("span");
            avatar.classList.add("post-avatar");

            postHeader.appendChild(avatar);

            const author = document.createElement("span");
            author.textContent = post.author;

            postHeader.appendChild(author);
            
            const date = document.createElement("time");
            date.dateTime = post.createdAt;
            date.textContent = post.createdAt;
            
            postHeader.appendChild(date);

            const image = document.createElement("img");
            image.src = post.image;
            image.alt = "Post image";
            article.appendChild(image);

            const text = document.createElement("p");
            text.textContent = post.text;
            article.appendChild(text);

            const likeButton = document.createElement("button");
            likeButton.classList.add("like-btn");
            likeButton.innerHTML = `👍 <span class="like-count">${post.likes}</span>`;
            let liked = false;
            likeButton.addEventListener("click", () => {
                liked = !liked;
                likeButton.classList.toggle("liked", liked);
                if (liked) {
                    post.likes++;
                } else {
                    post.likes--;
                }
                likeButton.innerHTML = `👍 <span class="like-count">${post.likes}</span>`;
                });
            article.appendChild(likeButton);
            
            article.prepend(postHeader);
            feed.appendChild(article);
    });
});