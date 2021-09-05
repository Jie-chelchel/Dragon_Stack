const express = require("express");
const app = express();
const GenerationEngine = require("./generation/engine");
const engine = new GenerationEngine();
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");

engine.start();
//this is where you stop the engine
// setTimeout(() => {
//   engine.stop();
// }, 10000);
app.locals.engine = engine;
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

module.exports = app;
