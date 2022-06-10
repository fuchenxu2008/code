## Commands

1. Create PostgreSQL server: `initdb --locale=C -E UTF-8 node1`
2. Start PostgreSQL server: `pg_ctl -D node1 -l logfile start`
3. Connect via terminal: `psql -p [PORT] postgres`
4. Create database: `create database [dbname];`
5. List databases: `\l`
6. Select database: `\c [dbname]`
7. List tables: `\dt`
8. For public access: 
  - Add or edit the following line in your postgresql.conf: `listen_addresses = '*'`
  - Add the following line as the first line of pg_hba.conf. It allows access to all databases for all users with an encrypted password:
    ```
    # TYPE DATABASE USER CIDR-ADDRESS  METHOD
    host  all  all 0.0.0.0/0 md5
    ```
  - Type `\c` to select default postgre database, and type `\password` to set password