process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const ask = process.stdin.read();

  if (ask) {
    process.stdout.write(`Your name is: ${ask}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
