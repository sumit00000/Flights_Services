const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

//whatever are the incoming requests we need to actually mention in expressjs that in the incomming requests
//that there is a request body please read it like a json
//to achieve this in older version of expressjs have inbuilt library then after some versions 
//they extractout a seperate library that famus as body parser
// so all we have to do is before start registering any route 
//app.use(express.json()) //it registered a middleware for all upcoing routes that mention below

app.use(express.json());   //express.json return some middleware that only parse json and only looks at the request 
                           //where the content header matches type json
                           //so what it does? it helps us to actually parse the incoming js request body without it express would not be parse the incoming request 
app.use(express.urlencoded({extended: true}));  // it returns middleware that only parse urlencoded body and only looks at request where the content type  header matches the type option 
                               //so in oredr to make sure that to read urlencoded stuff in the request body properly we need to add this one. 
                               //this function takes a sobject as an argument that has caled a property extended, extended:true mean it just a library with extended:false different library
app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
});
