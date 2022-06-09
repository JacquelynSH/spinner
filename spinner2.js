process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnies = ("|/-\|/-\|");
for (let i = 0; i < spinnies.length; i ++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnies[i] + '   ');
    if (i + 1 === spinnies.length)
      process.stdout.write('\n');
  }, i * 200);
}