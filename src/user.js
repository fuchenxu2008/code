// users.js
import { sql1 } from './db.js'

const sql = sql1;

async function createUserTable() {
  const table = await sql`
    CREATE TABLE users (
      id serial not null primary key,
      name varchar(255),
      Age int
  );
  `
  return table;
}

async function getUsersOver(age) {
  const users = await sql`
    select
      name,
      age
    from users
    where age > ${ age }
  `
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}


async function insertUser({ name, age }) {
  const users = await sql`
    insert into users
      (name, age)
    values
      (${ name }, ${ age })
    returning name, age
  `
  // users = Result [{ name: "Murray", age: 68 }]
  return users
}

// createUserTable().then(table => console.log(table))

// insertUser({ name: 'Babe', age: 17 }).then(res => console.log(res))

getUsersOver(17).then((users) => console.log('users: ', users))