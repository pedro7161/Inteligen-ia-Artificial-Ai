// configurações da validação cruzada num ficheiro nomedoficheiro18.js

const brain = require('brain.js');
const wineQuality = require('../data/wine-data.json');

const networkOptions = {
  hiddenLayers: [100, 60, 30], // Camadas ocultas com 100, 50 e 25 neurônios, respectivamente
  activation: 'sigmoid', // Função de ativação para as camadas ocultas
  learningRate: 0.01 // Taxa de aprendizado
};

const trainingOptions = {
  iterations: 50000, // Aumentamos ainda mais o número de iterações
  errorThresh: 0.0004, // Reduzimos ainda mais o limite de erro
  log: true
}

const crossValidate = new brain.CrossValidate(() => new brain.NeuralNetwork, networkOptions);
crossValidate.train(wineQuality, trainingOptions);

/**
  Critério de má qualidade: Os vinhos serão considerados de má qualidade quando tanto o valor de "fixed acidity" quanto o valor de "volatile acidity" forem menores do que 0.5.
  Critério de qualidade ok: Os vinhos serão considerados de qualidade ok quando pelo menos um dos valores de "fixed acidity" ou "volatile acidity" for maior do que 0.5 e a amplitude entre os valores não for muito grande.
  Critério de ótima qualidade: Os vinhos serão considerados de ótima qualidade quando pelo menos um dos valores de "fixed acidity" ou "volatile acidity" for maior do que 0.5 e a amplitude entre os valores for grande.
 */

const json = crossValidate.toJSON();
const net = crossValidate.toNeuralNetwork();

const input = {"fixed acidity": 10, "volatile acidity": 10};
const results = net.run(input);

console.log(`\n> Taxa de erro: ${json.sets[3].error}\n> Iterações: ${json.sets[3].iterations}`);
console.log('-----------------------------------------------------');
console.log(`\n> Wine parameters: ${JSON.stringify(input)} | Wine Quality: ${parseFloat(results["quality"]).toFixed(15)}.`);

switch(true) { 
  case results["quality"] < 0.5:
    console.log(`\n> Wine quality is bad.`);
    break;
  case results["quality"] >= 0.5 && results["quality"] <= 0.6:
    console.log(`\n> Wine quality is ok.`);
    break;
  case results["quality"] > 0.6:
    console.log(`\n> Wine quality is great.`);
    break;
    
  default: 
    console.log(`\n> Wine quality is unknown.`);
}