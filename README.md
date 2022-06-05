## Commands

1. Create PostgreSQL server: `initdb --locale=C -E UTF-8 node1`
2. Start PostgreSQL server: `pg_ctl -D node1 -l logfile start`
3. Connect via terminal: `psql -p [PORT] postgres`
4. Create database: `create database [dbname];`
5. List databases: `\l`
6. Select database: `\c [dbname]`
7. List tables: `\dt`