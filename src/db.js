import postgres from 'postgres'
import { node1, node2, node3 } from './config/index.js'

export const sql1 = postgres({
  host: [ 'localhost' ],
  port: [ node1.port ],
  path: false,
  database: node1.database,
  user: '',
  pass: '',
})

export const sql2 = postgres({
  host: [ 'localhost' ],
  port: [ node2.port ],
  path: false,
  database: node2.database,
  user: '',
  pass: '',
})

export const sql3 = postgres({
  host: [ 'localhost' ],
  port: [ node3.port ],
  path: false,
  database: node3.database,
  user: '',
  pass: '',
})
