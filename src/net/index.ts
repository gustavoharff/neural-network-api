import { NeuralNetwork } from 'brain.js'
import { train } from './train'

export const net = new NeuralNetwork({
  iterations: 5000,
  hiddenLayers: [11],
  errorThresh: 0.0001,
  learningRate: 0.1,
  activation: 'sigmoid'
})

train(net)
