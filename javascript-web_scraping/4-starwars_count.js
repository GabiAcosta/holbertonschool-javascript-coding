#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  let count = 0;
  const movies = JSON.parse(body);
  movies.results.forEach(movie => {
    movie.characters.forEach(character => {
      if (character.includes('/people/18')) count++;
    });
  });
  console.log(count);
});
