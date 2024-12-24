// Start
const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

// Object to store all the categories.
const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

// Function to get the category name and class name.
const forumCategory = (id) => {
  // Store for category name and class name of each category.
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];

    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }

  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;

  return `<a href="${url}" class="${linkClass}" target="_blank">${linkText}</a>`;
};

// Function to determine and display the time since the last post.
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

// Function to display the number of views.
const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);
  if (views >= 1000) {
    return `${thousands}k`;
  }

  return views;
};

// Array of Fallback URLs
const fallbackAvatarUrls = [
  "https://i.pinimg.com/736x/34/76/82/347682e28f3b2782cd556687a0e8bf4d.jpg",
  "https://i.pinimg.com/736x/5b/da/fc/5bdafcaccaded668743405405fc055f7.jpg",
  "https://i.pinimg.com/736x/8c/a5/26/8ca526b2042d2dae10511a80f3d5866a.jpg",
  "https://i.pinimg.com/736x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg",
  "https://i.pinimg.com/736x/dd/48/cc/dd48cc3579abfa3b1e725f9b0b13bc65.jpg",
  "https://i.pinimg.com/736x/a2/5f/f0/a25ff04aea0d40dae6e863fc146f10aa.jpg",
  "https://i.pinimg.com/736x/05/74/ae/0574aefbafcfa5da7b8b9d3d306130c8.jpg",
];

// Function to get Random Fallback Avatar
const getRandomFallbackAvatar = () => {
  const randomIndex = Math.floor(Math.random() * fallbackAvatarUrls.length);
  return fallbackAvatarUrls[randomIndex];
};

// Function to get the avatars of the users.
const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      if (user) {
        const avatar = user.avatar_template.replace(/{size}/, 30);
        const userAvatarUrl = avatar.startsWith("/user_avatar/")
          ? avatarUrl.concat(avatar)
          : avatar;
        console.log(`User: ${user.name}, Avatar URL: ${userAvatarUrl}`); // Debugging log
        return `<img src="${userAvatarUrl}" alt="${
          user.name
        }" onerror="this.onerror=null; this.src='${getRandomFallbackAvatar()}';"/>`;
      }
    })
    .join("");
};

// Fetching data from the API.
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

// Displaying data on the page.
const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML = topics
    .map((item) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = item;
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
