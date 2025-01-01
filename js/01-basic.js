//! ==========================================================
/* const user = {
  username: "Jacob name",
  age: 25,
  city: "Dnipro",
  country: "Ukraine",
  isStudent: false,
  skills: {
    html: true,
    css: false,
    js: true,
  },
}; */

/* const {
  username,
  age,
  city,
  country,
  isStudent,
  skills: { html, css, js },
} = user; */

//! ==========================================================
/* const message = {
  update_id: 936354609,
  message_id: 1698231,
  from: {
    id: 433982686,
    is_bot: false,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    language_code: "uk",
  },
  chat: {
    id: 433982686,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    type: "private",
  },
  date: 1716567768,
  text: "Test",
};

const { update_id, date, text, message_id } = message; */

//! ==========================================================
/* const text = "Hello world";

const message = {
  update_id: 936354609,
  message_id: 1698231,
  from: {
    id: 433982686,
    is_bot: false,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    language_code: "uk",
  },
  chat: {
    id: 433982686,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    type: "private",
  },
  date: 1716567768,
  text: "Test",
};

const { text: myText } = message;
// const myText = message.text */

//! ==========================================================
/* const message = {
  update_id: 936354609,
  message_id: 1698231,
  from: {
    id: 433982686,
    is_bot: false,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    language_code: "uk",
  },
  chat: {
    id: 433982686,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    type: "private",
  },
  date: 1716567768,
  text: "Test",
};

const { text: messageText, data: messageDate } = message; */

//! ==========================================================
/* const user = {
  username: "Jacob name",
  age: 25,
  city: "Dnipro",
  country: "Ukraine",
  isStudent: false,
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

const { username, x = 0, y = 0 } = user;
 */
//! ==========================================================
/* const user = {
  //   username: "Jacob name",
  age: 25,
  city: "Dnipro",
  country: "Ukraine",
  isStudent: false,
  skills: {
    html: true,
    css: false,
    js: true,
  },
  x: 10,
};

const {
  username: firstName = "Anonymous",
  x: firstNumber = 1,
  y: secondNumber = 1,
} = user;
console.log(firstName);
console.log(firstNumber);
console.log(secondNumber); */

//! ==========================================================
/* const user = {
  //   username: "Jacob name",
  age: 25,
  city: "Dnipro",
  country: "Ukraine",
  isStudent: false,
  skills: {
    html: true,
    css: false,
    js: true,
  },
  x: 10,
};

const {
  skills: { html, css, js },
} = user;
console.log(html); */

//! ==========================================================
/* const message = {
  update_id: 936354609,
  message_id: 1698231,
  from: {
    id: 433982686,
    is_bot: false,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    language_code: "uk",
  },
  chat: {
    id: 433982686,
    first_name: "Volodymyr",
    username: "pashchenko_v_r",
    type: "private",
  },
  date: 1716567768,
  text: "Test",
};

const {
  from: { first_name, username },
} = message; */

//! ==========================================================
/* const messageData = {
  update_id: 936354609,
  message: {
    message_id: 1698231,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "pashchenko_v_r",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "pashchenko_v_r",
      type: "private",
    },
    date: 1716567768,
    text: "Test",
  },
};

const { from: { x, y } = {} } = messageData;
console.log(x, y); */

//! ==========================================================
/* const book = {
  id: 123,
  author: "Volodka",
  title: "MyBook",
  desc: "test",
};

const { id, ...myBook } = book;
console.log(myBook); */

//! ==========================================================
/* const book = {
  id: 123,
  author: "Volodka",
  title: "MyBook",
  desc: "test",
  pages: 300,
  price: 50,
  year: 2025,
  address: {
    city: "Dnipro",
    country: "Ukraine",
    x: 1000,
    y: 2000,
  },
}; */

/* const { id, pages, year, price, ...newBook } = book;
console.log(newBook); */

/* const {
  address: { city, country, ...location },
} = book; */

//! ==========================================================
//! ==========================================================
//! ==========================================================
//! ==========================================================
/* const arr = [1, 2, 3, 4, 5];

const [x1, x2, x3] = arr; */

//! ==========================================================
// const rgb = [123, 12, 52];

// const [red, green, blue] = rgb;
// const [red, , blue] = rgb;
// const [, , blue] = rgb;

/* const [red, green, blue, alpha = 1] = rgb;
console.log(red, green, blue, alpha); */

//! ==========================================================
/* const arr = ["hello", 1, 2, 3, 4, 5, 4, 2];
const [str, ...numbers] = arr;
console.log(str);
console.log(numbers); */

//! ==========================================================
/* const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [[x1, x2, x3], [x4, x5, x6], [x7, x8, x9]] = arr;
console.log(x4); */

//! ==========================================================
/* let x = 10;
let y = 20;
let temp = x;

[x,y] = [y, x]

x = y;
y = temp; */

//! ==========================================================
/* const t1 = 50;
const t2 = 60;

// const arr = [t1, t2];

const [x, y] = [t1, t2]; */

/* const t1 = 10;
const t2 = 50;
const t3 = 25;
const t4 = 56;
const t5 = 12;

const [x1, x2, x3, x4, x5] = [t3, t1, t2, t5, t4]; */
