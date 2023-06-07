const brain = require('brain.js');

// load restaurants data from file
const restaurants = require('../data/restaurants.json');

const networkOptions = { learningRate: 0.0004 };
const trainingOptions = { iterations:20000, errorThresh: 0.004, log: true };

const crossValidate = new brain.CrossValidate(() => new brain.NeuralNetwork, networkOptions);
crossValidate.train(restaurants, trainingOptions);

const json = crossValidate.toJSON();
const net = crossValidate.toNeuralNetwork();

const results = net.run({ 'Friday': 1 });

// order results by highest probability to lowest
const sorted = Object.entries(results)
  .sort(([, a], [, b]) => b - a)
  .map(([restaurant]) => restaurant);

console.log('-----------------------------------------------------');
for (let restaurant of sorted) {
  // find weekday of current restaurant in restaurants structure
  const weekday = Object.keys(restaurants.filter(r => r.output[restaurant] === 1)[0].input)[0];
  console.log(`${restaurant}: ${results[restaurant]} | ${weekday} | Probability in %: ${(results[restaurant] * 100).toFixed(6)}`);
  console.log('----------------------------------------------------');
}

console.log(`\n> Taxa de erro: ${json.sets[3].error}\n> Iterações: ${json.sets[3].iterations}`);