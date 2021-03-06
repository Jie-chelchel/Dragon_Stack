const pool = require("../../databasePool");

class DragonTable {
  static storeDragon(dragon) {
    const { birthdate, nickname, generationId } = dragon;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId") VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (err, res) => {
          if (err) return reject(err);

          const dragonId = res.rows[0].id;
          console.log(dragonId);
          resolve({ dragonId });
        }
      );
    });
  }
}

module.exports = DragonTable;
