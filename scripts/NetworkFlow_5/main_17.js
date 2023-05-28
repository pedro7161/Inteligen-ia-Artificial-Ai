//nomedoficheiro17.js
// configurações da fluxo de rede num ficheiro nomedoficheiro17.js

const brain = require('brain.js');
const { TrainStream } = require('train-stream');
const net = new brain.NeuralNetwork();

const data = [
    {input:[0,0], output:[0]},
    {input:[0,1], output:[1]},
    {input:[1,0], output:[1]},
    {input:[1,1], output:[0]}
];

const trainStream = new TrainStream({
    neuralNetwork: net,
    floodCallback: function() {
        readInputs(trainStream, data);
    },
    doneTrainingCallback: function(status) {
        console.log(status);
        const output00 = parseFloat(net.run([0,0])).toFixed(0);
        const output01 = parseFloat(net.run([0,1])).toFixed(0);
        const output10 = parseFloat(net.run([1,0])).toFixed(0);
        const output11 = parseFloat(net.run([1,1])).toFixed(0);
        console.log(`0 xor 0: ${output00}`);
        console.log(`0 xor 1: ${output01}`);
        console.log(`1 xor 0: ${output10}`);
        console.log(`1 xor 1: ${output11}`);
    }
});

function readInputs(stream, data) {
    for(let i = 0; i < data.length; i++){
        stream.write(data[i]);
    }
    
    stream.endInputs();
}
readInputs(trainStream, data);