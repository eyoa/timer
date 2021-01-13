// user can press b and it should beep right away.
//user can input 1 to 9 and it immediately outputs setting timer for x seconds. and beep according to delay
//user can use ctrl c to exit program and  it will say "Thanks for using me, ciao!" before terminating

const readline = require('readline');

//function to set up beeps
const setBeep = function(delay) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log("Beep");
  }, delay * 1000);
};

//setting up readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//listening for keypress events
process.stdin.on('keypress', (str, key) => {
  //Beeps when b key is pressed
  if (key.name === 'b') {
    process.stdout.write('\x07');
    process.stdout.write(`\r`);
    console.log("Beep");
    rl.clearLine(process.stdout);
  }

  //can still use exit shortcut
  if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

});

//read in numbers entered to set timer with delays
rl.on('line', (time) => {
  if (isNaN(time) === false) {
    console.log(`setting timer for ${time} seconds.`);
    setBeep(time);
  }
});


