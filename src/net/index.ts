import { NeuralNetwork } from 'brain.js'
import { train } from './train'

export const net = new NeuralNetwork()

train(net)
