const { REFRESH_RATE, SECONDS } = require("./config");
const Dragon = require("./dragon");
const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));
    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;
    //date.now give you the ms since 1970 1 1, add msUtilExp will , pass it to the new date,
    //this will give you an actual expiration date according to tht millisecond input
    return new Date(Date.now() + msUntilExpiration);
    s;
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }
    return new Dragon();
  }
}

module.exports = Generation;
