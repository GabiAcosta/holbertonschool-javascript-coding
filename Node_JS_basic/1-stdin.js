process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdout.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit(console.log('This important software is now closing'));
});
