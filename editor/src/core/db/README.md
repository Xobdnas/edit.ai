#DB Core module

each "plugin" should have its own database (db) folder
 - user.js should be in plugins/users/db/users.js
 - name or key could potentially be used to find file
 - also could be used for db schema changes
 
- MYSQL (MariaDB,Mysql,Forms..) support nothing else
 - no abstraction on top of it, just Sequelize and nothing else
 
- 