/* const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
}; */

//* Без деструктуризації
/* function getUserName(obj) {
  console.log(
    `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js - ${obj.skills.js} `
  );
}
getUserName(user); */

//* З деструктуризацією
/* function getUserName({ username, skills: { html, css, js } }) {
  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js} `
  );
}
getUserName(user); */

//! ==========================================================
/* function updateBook({ id, ...book }) {
  console.log(id, book);
}

const book = {
  id: 1233,
  title: "asddas",
  author: "123",
  desc: "wqe",
};

updateBook(book); */

//! ==========================================================
/* function colorTemplate({ name, title, author }) {
  return `
  <li>
  ${name}
  ${title}
  ${author}
  </li>
  `;
}
 */
