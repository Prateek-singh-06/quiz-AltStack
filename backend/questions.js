const nodeJsQuestions = [
  {
    question: "What is Node.js?",
    options: [
      "A front-end JavaScript framework",
      "A runtime environment for executing JavaScript code outside of a web browser",
      "A database management system",
      "A server-side rendering engine for React",
    ],
    answer: "2",
  },
  {
    question: "Which of the following best describes the Node.js event loop?",
    options: [
      "A process that handles HTTP requests asynchronously",
      "A mechanism for executing JavaScript code in parallel",
      "A single-threaded loop that handles I/O operations asynchronously",
      "A data structure used for storing event listeners",
    ],
    answer: "3",
  },
  {
    question: "In Node.js, what is the purpose of a callback function?",
    options: [
      "To handle errors in asynchronous code",
      "To terminate the Node.js process",
      "To define routes in an Express.js application",
      "To execute code after an asynchronous operation completes",
    ],
    answer: "4",
  },
  {
    question: "What is the CommonJS module format used in Node.js?",
    options: [
      "A standard for defining HTML templates",
      "A specification for writing test cases",
      "A module system for structuring JavaScript code into reusable modules",
      "A protocol for handling HTTP requests and responses",
    ],
    answer: "3",
  },
  {
    question: "Which of the following is NOT a core module in Node.js?",
    options: [
      "fs (File System)",
      "http (HTTP)",
      "express (Express.js)",
      "path (Path)",
    ],
    answer: "3",
  },
  {
    question: "What is the purpose of the `require` function in Node.js?",
    options: [
      "To include external libraries and modules",
      "To define routes in an Express.js application",
      "To send HTTP requests",
      "To create a new file in the file system",
    ],
    answer: "1",
  },
  {
    question: "Which module is used to create a web server in Node.js?",
    options: ["http", "fs", "url", "net"],
    answer: "1",
  },
  {
    question:
      "Which of the following is NOT a method provided by the fs (File System) module in Node.js?",
    options: [
      "fs.readFile()",
      "fs.writeFile()",
      "fs.createServer()",
      "fs.unlink()",
    ],
    answer: "3",
  },
  {
    question: "What is the purpose of the `process` object in Node.js?",
    options: [
      "To manage child processes",
      "To interact with the current Node.js process",
      "To handle HTTP requests",
      "To create an event emitter",
    ],
    answer: "2",
  },
  {
    question:
      "What does the term 'non-blocking I/O' mean in the context of Node.js?",
    options: [
      "I/O operations that block the event loop",
      "I/O operations that do not block the event loop and allow other operations to run concurrently",
      "I/O operations that must be executed synchronously",
      "I/O operations that are not supported in Node.js",
    ],
    answer: "2",
  },
];

module.exports = nodeJsQuestions;
