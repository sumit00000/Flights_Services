In airplane.js file:
--we added bunch of constraints of modelNumber here.
-- because whta sequalize tells us that there are two level of constraints we actually put
-- 1. database level 2.javascript level 
-- when we just mention type, allowNull what will happens is 
-- it will put a javascript level constraints, from javascript level code we will try to add a airplane without a capacity it will through an error,
--but we will put constraints in migrations also then it will put a database level constraints also ,
--that is when the table i craeted that table will having thats constraints


Hoew to craete a new model or migrations: / added a new City model using the following command:
--npx sequalize model: generate --name City --attributes name:string
after some needed changes or required changes exceute this for migrate in tables
-->npx sequalize db:migrate
