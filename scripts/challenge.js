//nomedoficheiro18.js
// configurações da validação cruzada num ficheiro nomedoficheiro18.js
const brain = require('brain.js');

// generate an object restaurants that contains the name and the week name in english. Try to not repeate very much the names
const restaurantes = {
  'The Savory Spoon': 'Monday',
  'Bella Italia': 'Tuesday',
  'Spice Fusion': 'Wednesday',
  'Ocean Breeze': 'Thursday',
  'Fire and Ice': 'Friday',
  'Mango Tango': 'Saturday',
  'Sunday Brunch': 'Sunday',
  'The Rustic Fork': 'Monday',
  'Golden Dragon': 'Tuesday',
  'Café de Paris': 'Wednesday',
  'Salsa Verde': 'Thursday',
  'Moonlight Terrace': 'Friday',
  'Riverside Grill': 'Saturday',
  'Sunset Beach': 'Sunday',
  'Taste of India': 'Monday',
  'Mamma Mia': 'Tuesday',
  'Thai Orchid': 'Wednesday',
  'El Mariachi': 'Thursday',
  'The Paddock': 'Friday',
  'Sushi House': 'Saturday',
  'Weekend Bistro': 'Sunday',
  'Harvest Garden': 'Monday',
  'La Dolce Vita': 'Tuesday',
  'The Spice Route': 'Wednesday',
  'Island Delight': 'Thursday',
  'The Fireside': 'Friday',
  'Café del Sol': 'Saturday',
  'Sunrise Diner': 'Sunday',
  'Flavors of Mexico': 'Monday',
  'Bistro 360': 'Tuesday',
  'Gourmet Grill': 'Wednesday',
  'Marina Bay': 'Thursday',
  'The Olive Tree': 'Friday',
  'Noodle House': 'Saturday',
  'Sundown Café': 'Sunday',
  'The Tasting Room': 'Monday',
  'Rustic Woodfire': 'Tuesday',
  'Casa Bella': 'Wednesday',
  'Saffron Fusion': 'Thursday',
  'The Waterfront': 'Friday',
  'Palm Beach Grill': 'Saturday',
  'Sunday Roast': 'Sunday',
  'Flaming Wok': 'Monday',
  'Little Italy': 'Tuesday',
  'Zen Garden': 'Wednesday',
  'Cactus Cantina': 'Thursday',
  'The Vineyard': 'Friday',
  'Silk Road': 'Saturday',
  'Sunflower Café': 'Sunday',
  'The Hungry Moose': 'Monday',
  'Taste of Morocco': 'Tuesday',
  'Chopsticks Express': 'Wednesday',
  'The Wharfside': 'Thursday',
  'Garden Oasis': 'Friday',
  'The Sugar Plum': 'Saturday',
  'Lazy Sunday': 'Sunday',
};

const trainingData = [];

for (let restaurant in restaurantes) {
  const dayOfWeek = restaurantes[restaurant];
  trainingData.push({
    input: { [dayOfWeek]: 1 },
    output: { [restaurant]: 1 } 
  });
}

const networkOptions = { learningRate: 0.05 };
const trainingOptions = { iterations:20000, errorThresh: 0.004, log: true };

const crossValidate = new brain.CrossValidate(() => new brain.NeuralNetwork, networkOptions);
crossValidate.train(trainingData, trainingOptions);

const json = crossValidate.toJSON();
const net = crossValidate.toNeuralNetwork();

const results = net.run({ 'Friday': 1 });

// order results by highest probability to lowest
const sorted = Object.entries(results)
  .sort(([, a], [, b]) => b - a)
  .map(([restaurant]) => restaurant);

console.log('-----------------------------------------------------');
for (let restaurant of sorted) {
  console.log(`${restaurant}: ${results[restaurant]} | ${restaurantes[restaurant]} | Probability in %: ${(results[restaurant] * 100).toFixed(6)}`);
  console.log('----------------------------------------------------');
}

console.log(`\n> Taxa de erro: ${json.sets[3].error}\n> Iterações: ${json.sets[3].iterations}`);