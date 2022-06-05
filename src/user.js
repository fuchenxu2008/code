// users.js
import { agent1, agent2, agent3 } from './db.js'

const sql = agent1;

async function createUserTable() {
  const table = await sql`
    CREATE TABLE users (
      id serial not null primary key,
      name varchar(255),
      age int
  );
  `
  return table;
}

async function getUsersOver(age) {
  const users = await sql`
    select
      id,
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
    returning id, name, age
  `
  // users = Result [{ name: "Murray", age: 68 }]
  return users
}

async function updateUser({ id, name, age }) {
  const user = {
    id,
    name,
    age
  }
  const users = await sql`
    update users set ${
      sql(user, 'name', 'age')
    }
    where id = ${ user.id }
  `
  return users
}

async function deleteUser(id) {
  const users = await sql`
    delete from users
    where id = ${id}
    returning id, name, age
  `
  return users
}

// createUserTable().then(table => console.log(table))

// insertUser({ name: 'jane', age: 33 }).then(res => console.log(res))

getUsersOver(17).then((users) => console.log('users: ', users))

// updateUser({ id: 1, name: 'Steve', age: 20 }).then(res => console.log(res))

// deleteUser(3).then(res => console.log(res))