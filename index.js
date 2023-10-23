// Sample data for users, topics, and comments
let users = [];
let topics = [];
let comments = [];

// Function to perform user authentication
function authenticateUser(email, password) {
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    // User authenticated successfully
    document.querySelector(".user-info").textContent = `Welcome, ${user.name}!`;
  } else {
    // Invalid credentials
    document.querySelector(".user-info").textContent = "Invalid email or password";
  }
}

// Function to register a new user
function registerUser(name, email, password) {
  const newUser = { name, email, password };
  users.push(newUser);
  document.querySelector(".user-info").textContent = `Welcome, ${newUser.name}!`;
}

// Function to post a new topic
function postTopic(topic) {
  const newTopic = { topic };
  topics.push(newTopic);
  console.log("New topic posted:", newTopic);
}

// Function to post a new comment
function postComment(comment) {
  const newComment = { comment };
  comments.push(newComment);
  console.log("New comment posted:", newComment);
}

// Login form submission
const loginForm = document.querySelector("#login-section form");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get email and password values from the form
  const email = document.querySelector("#login-section #email").value;
  const password = document.querySelector("#login-section #password").value;

  // Perform authentication logic here
  authenticateUser(email, password);

  // Clear the form fields
  loginForm.reset();
});

// Registration form submission
const registrationForm = document.querySelector("#registration-section form");
registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get name, email, and password values from the form
  const name = document.querySelector("#registration-section #name").value;
  const email = document.querySelector("#registration-section #email").value;
  const password = document.querySelector("#registration-section #password").value;

  // Perform registration logic here
  registerUser(name, email, password);

  // Clear the form fields
  registrationForm.reset();
});

// Topic posting form submission
const topicPostingForm = document.querySelector("#topic-posting-section form");
topicPostingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get topic value from the form
  const topic = document.querySelector("#topic-posting-section #topic").value;

  // Perform topic posting logic here
  postTopic(topic);

  // Clear the form field
  topicPostingForm.reset();
});

// Comment posting form submission
const commentPostingForm = document.querySelector("#comment-section form");
commentPostingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get comment value from the form
  const comment = document.querySelector("#comment-section #comment").value;

  // Perform comment posting logic here
  postComment(comment);

  // Clear the form field
  commentPostingForm.reset();
});

const { sendOTP } = require('./sendOTP');

// Generate a random OTP
function generateOTP() {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

// Example usage
const email = '0akashnigam@gmail.com';
const otp = generateOTP();
sendOTP(email, otp);

let nodemailer = require('nodemailer');

// Function to send OTP via email
function sendOTP(email, otp) {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '0akashnigam@gmail.com',
            pass: '123123'
        }
    });

    // Define the email options
    const mailOptions = {
        from: '0akashnigam@gmail.com',
        to: email,
        subject: 'One-Time Password (OTP)',
        text: `Your OTP is: ${otp}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending OTP:', error);
        } else {
            console.log('OTP sent successfully:', info.response);
        }
    });
}
exports.sendOTP = sendOTP;
