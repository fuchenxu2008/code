import postgres from 'postgres'
import { node1, node2, node3 } from './config/index.js'

export const agent1 = postgres({
  host: [ '192.168.86.33' ],
  port: [ node1.port ],
  path: false,
  database: node1.database,
  user: 'fuchenxu',
  pass: 'fcx',
})

export const agent2 = postgres({
  host: [ 'localhost' ],
  port: [ node2.port ],
  path: false,
  database: node2.database,
  user: '',
  pass: '',
})

export const agent3 = postgres({
  host: [ 'localhost' ],
  port: [ node3.port ],
  path: false,
  database: node3.database,
  user: '',
  pass: '',
})
