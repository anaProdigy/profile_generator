const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name ? Nicknames are also acceptable : ) ', (name) => {
  rl.question('Whats an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('Whats your favourite thing to eat for that meal ? ', (favouriteThings) => {
          rl.question('Which sport is your absolute favourite? ', (favouriteSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {


              const profile = `Hi My name is ${name}. When I am not coding i love ${activity}.I listen to ${music} while doing that. My favourite food is ${meal}. And the best part is ${favouriteThings}. My fovourite sport is ${favouriteSport}. My super power is ${superPower}`;

              console.log(profile);

              rl.close();
            });
          });
        });
      });
    });
  });
});
