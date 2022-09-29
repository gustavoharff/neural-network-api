import { NeuralNetwork } from 'brain.js'
import { train } from './train'

export const net = new NeuralNetwork({
  iterations: 1000,
  errorThresh: 0.0005
})

train(net)
