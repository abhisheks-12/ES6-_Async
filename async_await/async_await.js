// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// Examples //

// const example = async () => {
//   return "Hello there";
// };

// async function someFunc() {
//   const result = await example();
//   console.log(result); // hello there
//   console.log('Hello World')
// }

// console.log(example())
// someFunc();

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`User not found : ${name}`);
    }
  });
}

function getArticle(userId) {
  return new Promise((resolve, reject) => {
    const article = articles.find((article) => article.userId === userId);

    if (article) {
      return resolve(article);
    } else {
      reject(`User Article Found `);
    }
  });
}

// getUser("susan")
//   .then((user) => getArticle(user.id))
//   .then((article) => console.log(article))
//   .catch((err) => console.log(err));

const getData = async () => {
  try {
    const user = await getUser("john");
    console.log(user);

    const article = await getArticle(user.id);
    console.log(article);
    
  } catch (err) {
    console.log(err);
  }
};
getData();
