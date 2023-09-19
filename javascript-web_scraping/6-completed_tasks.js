#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.parse(body);
  const todos = {};

  data.forEach(task => {
    const userId = task.userId;
    if (!todos[userId]) {
      todos[userId] = 0;
    }

    if (task.completed) {
      todos[userId]++;
    }
  });
  console.log(todos);
});
