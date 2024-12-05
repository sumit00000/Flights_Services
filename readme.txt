useful command for setup mysql in ubuntu
#sudo apt-get install mysql-server
# sudo systemctl status mysql
#systemctl start mysql
#sudo mysql
#mysql_secure_installation
#mysql -u root -p


#create database sampleDB;
#show schemas;


to craete a new user
#create user 'sumitsingh'@'localhost' identified with mysql_native_password by 'password';
#use mysql;

#select user from user;

to access new user or database
# mysql -u root -p
#grant all on sampleDB.* to 'sumitsingh'@'localhost';
#GRANT ALL PRIVILEGES ON *.* TO 'sumitsingh'@'localhost' WITH GRANT OPTION;
#mysql -u sumitsingh -p

for sequalize when using ubuntu make this steps
1-->sudo npm install -g sequelize-cli
2--> mkdir "${HOME}/.npm-global"               //Create a Directory for Global Packages
3-->export PATH="${HOME}/.npm-global/bin:${PATH}"  // Add the following line to your shell configuration file (.bashrc, .zshrc, etc.):
4--> source ~/.bashrc
5--> npm install -g sequelize-cli

-->npx sequelize-cli db:create // go to /src directory 
output{
     npx sequelize-cli db:create

Sequelize CLI [Node: 21.7.3, CLI: 6.6.2, ORM: 6.37.3]

Loaded configuration file "config/config.json".
Using environment "development".
Database Flights created.
}

--> npx sequelize-cli db:drop  // To delete a database schema or drop a database using Sequelize CLI, you can use the db:drop command. Here’s how you can do it:
                                // Drop the Database
                                // Run the db:drop Command


-----------after creating database sucessfull do some task of project purpose-----------------

--> npx sequalize model:generate --name Airplane --attributes modelNumber:string,capacity:integer or npx sequalize model:create  // generate a model and its migration
                                // '--name' tell that wat should be the table or model name 
                                // start giving attributes
                                // '--attributes' means that if our Airplane having a model number and this modelnumber is a column
// what are attribute in relational database?
--> In relational database attributes are columns, rows are tuples or tuples are rows.
--> so when we say attributs it means a a columns
--> in this database first column shoud be modelnumber:string no space required
--> then every Airplane have some capacity its a numaric value capacity:integer

--> when we enter this line this create two files technically 



# npx sequalize model:generate --name Airplane --attributes modelNumber:string,capacity:integer ---this command does not create table it just create only models and migrations.


How to commit database? // mean to upadte pending migrations in database
// craeting an migration and applying an migrations are two different things.
--craeting an migration means we have craeted a code with which we can still make  changes.
--but when apply an migratios thats get apply to the database.

--> npx sequalize db:migrate 

so if we run this command then it will apply all the pending migrations to the database
#we will think that how it knows what are  the pending migrations the solution is very simple :
--it actually tracks that what all migrations are actually added using the unique migration number, we see that number on migration file of file created by sequalizedb,
--based on that unique number it actually tracks which migrations has been appled 

so after run this command: // run this command in src
-->npx sequalize db:migrate 

--the movement we press enter it says:
{
    npx sequelize db:migrate

    Sequelize CLI [Node: 21.7.3, CLI: 6.6.2, ORM: 6.37.3]

    Loaded configuration file "config/config.json".
    Using environment "development".
    == 20240809022022-create-airplane: migrating =======
    == 20240809022022-create-airplane: migrated (0.110s)
}

it will print this 

-- if we remember previously we do not have any table , if we do show tables; now-
-- now i have one Airplanes table and also i have sequalizeMeta data as well.

--if we say describe Airplanes;
-->desc Airplanes;
//it show full description

some useful command to ceck details:
-->desc SequelizeMeta;
-->select * from SequalizeMeta;
-->select * from Airplanes;   // it show empty

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