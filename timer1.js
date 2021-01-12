// timer that will beep after a specifed amount of time
// Specified by args from command line

const timer = function() {
  let args = process.argv.slice(2);

  for (const set of args) {
    if (set > 0 && !isNaN(set)) {
      let setTime = set * 1000;
      setBeep(setTime);
    }
  }

};

const setBeep = function(delay) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log("Beep");
  }, delay);
};

timer();

