const Generation = require("./generation");

const generation = new Generation();

console.log("generation", generation);

const gooby = generation.newDragon();

console.log(gooby);

setTimeout(() => {
  const mimar = generation.newDragon();
  console.log("mimar", mimar);
}, 3000);
