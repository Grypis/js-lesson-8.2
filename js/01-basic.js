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
  skills = { html, css, js },
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
