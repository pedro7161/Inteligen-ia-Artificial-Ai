//nomedoficheiro11.js
// configurações da rede e treino, num ficheiro nomedoficheiro11.js
const brain = require('brain.js');
const net = new brain.NeuralNetwork();

net.train(
    [
        {input:[0,0], output:[0]},
        {input:[0,1], output:[1]},
        {input:[1,0], output:[1]},
        {input:[1,1], output:[0]}
    ],
    {
        iterations:20000,
        errorThresh: 0.005,
        log: false,
        logPeriod:10,
        learningRate:0.3,
        momentum:0.1,
        callback: function(data) {
            console.log(data);
        },
        callbackPeriod:10,
        timeout:Infinity
    }
);

const output = net.run([0,1]);
console.log(output);

// Guardem e executem