# IA Neural Network

[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

This project is an artificial intelligence (IA) neural network developed by Bruno Martins, Pedro Pinto, Pedro Rodrigues, David Gomes, and Gonçalo Monteiro. The neural network, implemented using the brain.js library, tackles two challenges: a general challenge and a wine quality challenge.

## General Challenge

The general challenge involves a list of restaurants to be search based on the weekday that are configured for. The neural network is trained using a dataset of restaurants, followed by a weekday as a value. The goal is to develop a model that can predict which are the most probabilistic restaurants to be shown.

## Wine Quality Challenge

The wine quality challenge focuses specifically on predicting the quality of wines based on certain features. The neural network is trained using a dataset of wine samples with corresponding quality ratings. The goal is to develop a model that can accurately predict the quality of a wine based on its characteristics.

## Technologies Used

- JavaScript: The neural network is implemented using JavaScript programming language, utilizing the brain.js library for neural network functionality.
- Neural Networks: The brain.js library is used to create and train neural networks. It provides a user-friendly interface for building and training various types of neural

## Usage

1. Install the required dependencies by running the following command:
```bash
npm install
```

2. To run a specific challenge, please run the following commands:
```bash
npm run challenge:restaurants
npm run challenge:wine-quality
```

## File Structure

- `scripts/challenge-restaurants.js`: The script file for the general challenge.
- `scripts/challenge-wine-quality.js`: The script file for the wine quality challenge.
- `README.md`: The documentation file you are currently reading.
- `package.json`: The npm package configuration file.

## Credits

The IA neural network project was developed by:
- Professor PhD, Carla Silva - creator of the code base

Code review, testing and creation of new challenges:
- Bruno Martins
- Pedro Pinto
- Pedro Rodrigues
- David Gomes
- Gonçalo Monteiro

Class B, Year: 3
