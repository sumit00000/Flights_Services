MIGRATIONS:
--migrations is like to do git add but it is not doing any git commit
--migrations are like more or less versions of our tables
--our migration file of this project is tell you that in the next commit these are the change sthat will happens.
--currently the changes that will happen is going to be arround according to this up function

what is this up function says?
--it says await , querryInterface

what is querryInterface?
--if we do not use sequalize for example we do not use any ORM,
--and we want to bydefault in a rows fashion connect to mysql then we actually need to setup a querryInterface oject,
--that is actually connect with mysql and we will write rows query,
--because here we using sequalize, sequalize does these querryInterface automatically,
-- so it has the querryInterface.

--it says create table which will be Airplanes(name of the table is Airplane)
-- we can see these properties we just added in these modelNumber and capacity,
-- but sequalize automatically knows no matter what we will definitly need id properties that will be primaryKey,
-- it shoud not be null and it shoud autoIncrement true, type-integer,
-- there should be create an createdAt and updatedAt because otherWise we do not be able to see,
--when the data is created or when it was not created.
--sequalize automatically does this,
-- and sequalize showimg when the next model commit, there will be table created with all of these properties.
-- if we wnat to make any changes, thisis the time to make the change,
-- if we want to createdAt and updatedAt then we remove it but we wnat to have any changes to be done in our table this is the movement we actually do that.
-- we shoud not do it later , but technically once a commit then we can actually revert things but for that we have to mak another commit that is the git thing.


so what this migration is telling :
-- there will be a table created and all of these things happens in that table 
-- if we do need anychange then we do now 


// if we just thinking we just took a mistake i did't want to create table.
// i wnat to rebote what shoud i do then,

//we can undo the migrate or we can also undo last migration and also undo last all migration.
-->npx sequalize db:migrate:undo

it print
{
    npx sequelize db:migrate:undo

    Sequelize CLI [Node: 21.7.3, CLI: 6.6.2, ORM: 6.37.3]

    Loaded configuration file "config/config.json".
    Using environment "development".
    == 20240809022022-create-airplane: reverting =======
    == 20240809022022-create-airplane: reverted (0.067s)

}

it will revert back everything if we do show tables:
--we see our Airplanes table is gone and SequalizeMeta table is available.

-->select * from sequalizeMeta;
// we see this is also empty because migrations has been reverted

//let suppose we want to change our table name from Airplanes to airplane
// beceause we also take name of our model is singular 
// our table should be plural but model file should denoted as singular.
// when we gave it the command name is automatically plural so thats why it is plural in migrations

// now i again change migrations 
// now migrate again
--> npx sequalize db:migrate

// now its boom 
--> SHOW TABLES;
// we see both tables Airplanes and sequalizeMeta
--> desc Airplanes;



note:
--what happens is when we are adding a migration then async up function is apply
--or undo the migration async down function get applied
--down function is drop the table

after applying these operation of undo and migrate take care about loosing data.

one more think let suppose five people working in a team and we have five migrations files
--we added one more migration means let say we added one more table 
--migration can add a table and migration can alter a table also 
-- adding table and now other 4 members if they wnat to have the same table how they get it
--they will just do git pull and they will run 
--> npx sequalize db:migrate;
--now what are the pending migrations in the system will actually shootup
-- thats why very easily we can maintain versions of models and database

