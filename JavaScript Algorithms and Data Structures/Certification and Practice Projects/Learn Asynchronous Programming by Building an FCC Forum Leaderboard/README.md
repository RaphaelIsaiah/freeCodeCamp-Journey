# Learn Asynchronous Programming by Building an FCC Forum Leaderboard

## JavaScript is an asynchronous programming language. And this project will help you gain proficiency in asynchronous concepts. You'll code your own freeCodeCamp forum leaderboard.

## This project will cover the Fetch API, promises, Async/Await, and the try..catch statement.

### Notes:

- To populate the forum leaderboard with data, you will need to request the data from an API. This is known as asynchronous operation, which means that tasks execute independently of the main program flow.
- You can use use async keyword to create an asynchronous function which returns a promise.
  ```
  const example = async () => {
  console.log("this is an example");
  };
  ```
- In the last project, you used the .catch() method to handle errors. Here you'll use a try...catch statement instead.
  The try block is designed to handle potential errors, and the code inside the catch block will be executed in case an error occurs.
  ```
  try {
  const name = "freeCodeCamp";
  name = "fCC";
  } catch (err) {
    console.log(err); // TypeError: Assignment to constant variable.
  }
  ```
- In the previous project, you used fetch() with the .then() method to perform logic after the promise was resolved. Now you will use the await keyword to handle the asynchronous nature of the fetch() method.
  The await keyword waits for a promise to resolve and returns the result.

  ```
  const example = async () => {
  const data = await fetch("https://example.com/api");
  console.log(data);
  }
  ```

  You want to get the response body as a JSON object. The .json() method of your res variable returns a promise, which means you will need to await it.

- Relationship of the allCategories object to the JSON data
  - The allCategories object is a static mapping that provides additional metadata (like the category name and CSS class name) for specific category IDs. It is not directly fetched from the JSON data but is used to enrich the data you fetch.
  - When you fetch the JSON data, the category_id field from each topic is checked against the allCategories object.
  ```
  const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML = topics
    .map((item) => {
      const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;
      return `
        <tr>
          <td>
            <a target="_blank" href="${forumTopicUrl}${slug}/${id}" class="post-title">${title}</a>
            ${forumCategory(category_id)}
          </td>
          <td>
            <div class="avatar-container">
              ${avatars(posters, users)}
            </div>
          </td>
          <td>${posts_count - 1}</td>
          <td>${viewCount(views)}</td>
          <td>${timeAgo(bumped_at)}</td>
        </tr>
      `;
    })
    .join("");
  };
  ```
  In this code, category_id is a property of each topic item. When the `forumCategory(category_id)` function is called, it checks whether this category_id exists in the allCategories object.
  - The line if (allCategories.hasOwnProperty(id)) checks if the allCategories object has a property with the key id. Here, id is actually the category_id passed to the forumCategory function. Imagine you fetch the following topic item from the JSON data:
  ```
  {
  "id": 123,
  "title": "How to Learn JavaScript",
  "views": 2000,
  "posts_count": 15,
  "slug": "how-to-learn-javascript",
  "posters": [{ "user_id": 1 }, { "user_id": 2 }],
  "category_id": 421,
  "bumped_at": "2024-12-25T12:34:56Z"
  }
  ```
  For this item, the category_id is 421. When forumCategory(421) is called, it:
  1. Checks if 421 is a property in allCategories with if(allCategories.hasOwnProperty(421)).
  2. Finds it and retrieves className and category from allCategories(421).
