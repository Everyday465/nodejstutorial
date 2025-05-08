
/* tutorial 1
 const tutorial = require ("./tutorial");
 console.log(tutorial.sum(1,1));
 console.log(tutorial.PI);
 console.log(new tutorial.SomeMathObject());
 */


/* tutorial 2 events module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2) =>{
   console.log('tutorial event has occured');
   console.log(num1+num2);
})

eventEmitter.emit('tutorial',1,2);


//extending event 
class Person extends EventEmitter{
   constructor(name){
       super();
       this._name =name;
   }
   get name(){
       return this._name;
   }
}

let pedro = new Person("Pedro");
//listener
pedro.on('name',()=>{
   console.log("my name is "+ pedro.name)
});
let christina = new Person("Christina");
christina.on('name',()=>{
   console.log("my name is "+ christina.name)
});

//executed based on order emitted(synchronously)
pedro.emit('name');
christina.emit('name');

*/

/* tutorial 3 Readline
const readline = require('readline');
const rl = readline.createInterface({
   input : process.stdin,
   output : process.stdout 
});

let num1 = Math.floor((Math.random() * 10)+1);
let num2 = Math.floor((Math.random() * 10)+1);
let answer = num1+num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput)=>{
   if(userInput.trim()==answer){
       rl.close();
   }
   else {
       rl.setPrompt('Incorrect resposne, please try again. \n');
       rl.prompt();
       //listens to user input and check
       //creates loop until
       rl.on('line',(userInput)=>{
           if(userInput.trim()==answer){
               rl.close();
           } else {
               rl.setPrompt(`Your answer of ${ userInput } is wrong.\n`);
               rl.prompt();
           }

       })
   }
});

rl.on('close',()=>{
   console.log("correct!!");
})

*/


/* tutorial 4 file system module part 1
const fs = require('fs');
//create file
// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('file successfully created');
//         //need to have encoding method
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             } else{
//                 console.log(file);
//             }
//         })
//     }
// })

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("file successfully renamed!");
//     }
// })

// fs.appendFile('example2.txt',"Some data being appended",(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("successfully appended data to file");
//     }
// })


// fs.unlink("example2.txt",(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('successfuly deleted file');
//     }
// })
*/


/* tutorial 5 folder - file system module part 

const fs = require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         fs.writeFile('./tutorial/example.txt',"this is an example",(err)=>{
//             if (err){
//                 console.log(err);
//             } else {
//                 console.log("successfully created file.")
//             }
//         })
//         console.log("successfully created folder");
        
//     }
// })
// fs.unlink('./tutorial/example.txt',(err=>{
//     if (err){
//         console.log(err);
//     } else {
//         fs.rmdir('tutorial', (err)=>{
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log("folder successfully deleted")
//             }
//         })
//     }
// }))

// fs.readdir('example',(err,files)=>{
//     if(err){
//         console.log(err);
//     } else {
//         // console.log(files); //[ 'a.txt', 'b.txt' ]
//         for (let file of files){
//             fs.unlink('./example/'+file,(err)=>{
//                 if (err){
//                     console.log(err);
//                 } else {
//                     console.log(`successfully deleted ${file}`);
//                 }
//             })
//         }
//     }
// })

*/

/* tutorial 6 read and write streams
const fs = require('fs');

const readStream = fs.createReadStream('./example.txt','utf8'); //reads data in chunks so it doesnt have to wait until all is read && to prevent erro from max buffer limit
const writeStream = fs.createWriteStream('example2.txt');
//readstream inherts the event listener module 
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})

*/

/* tutroial 7 pipechain and zlib
const fs = require('fs');
//compressing files module
const zlib = require('zlib');
//transform stream: takes the input, receives the data and manupilate the data. in this case is compressing
const gzip =zlib.createGzip();
const gunzip =zlib.createGunzip();

const readStream = fs.createReadStream('./example.txt','utf8'); //reads data in chunks so it doesnt have to wait until all is read && to prevent erro from max buffer limit
const writeStream = fs.createWriteStream('example2.txt.gz');

const readStreamGunzip = fs.createReadStream('./example2.txt.gz'); 
const writeStreamGunzip = fs.createWriteStream('uncompressed.txt');
//pipe: take in a input and send to a destination
//pipe chaining
readStream.pipe(gzip).pipe(writeStream);
//readStreamGunzip.pipe(gunzip).pipe(writeStreamGunzip);

writeStream.on('finish', () => {
    console.log('Compression finished ✅');
  
    // 2. Now DECOMPRESS example2.txt.gz -> uncompressed.txt
    const readStreamGunzip = fs.createReadStream('./example2.txt.gz');
    const writeStreamGunzip = fs.createWriteStream('uncompressed.txt');
  
    readStreamGunzip.pipe(gunzip).pipe(writeStreamGunzip);
  
    writeStreamGunzip.on('finish', () => {
      console.log('Decompression finished ✅');
    });
  });

*/

/* tutorial 8 http module
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        //write the response
        res.write("hello world for node js");
        //send the response
        res.end();
    } else {
        res.write('using some other domain');
        res.end();
    }
});

//get server up n running, which port im gonna request at
server.listen('3000');

*/


/* tutorial 9 html & fs module
const http = require('http');
const fs = require('fs');

//read html in server
// const server = http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/index.html');
//     //200 is status code
//     res.writeHead(200,{'Content-Type':'text/html'});
//     //res is also a writeStream. eg. readStream.pipe(writeStream)
//     readStream.pipe(res);

// }).listen(3000);

//read json
// const server = http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/example.json');
//     //200 is status code
//     res.writeHead(200,{'Content-Type':'application/json'});
//     //res is also a writeStream. eg. readStream.pipe(writeStream)
//     readStream.pipe(res);


// }).listen(3000);

const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/example.png');
    //200 is status code
    res.writeHead(200,{'Content-Type':'image/png'});
    //res is also a writeStream. eg. readStream.pipe(writeStream)
    readStream.pipe(res);


}).listen(3000);
*/

/* tutorial 10 npm packages
//using npm i lodash & npm uninstall lodash
const _ = require('lodash');
let example = _.fill([1,2,3,4,5],"banana",1,4);
console.log(example);
*/

/*express param & query
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.get('/example',(req,res)=>{
    res.send('hitting route');
})

app.get('/example/:name/:age',(req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ':' + req.params.age);
});
app.listen('3000');
*/

/* //tutorial 11 http post req mehtod & body parse module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
//encode the url. parses the data for use and put inside the request body
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    //provide object of email n password
    console.log(req.body);
    //database work here
    res.send('successfully posted data');
});

app.listen('3000');
*/


/* tutorial 12 working with json data with express & body parse module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
//encode the url 
app.use(bodyParser.urlencoded({extended: false}));
//parse the json and attach to the request.body (basically turn the json into an array)
app.use(bodyParser.json()); 

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    //provide object of email n password
    console.log(req.body);
    //database work here
    res.json({success: true});
});

app.listen('3000');
*/

/* tutorial 13 input validatio with express & joi
const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
//encode the url 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    //provide object of email n password
    console.log(req.body);
    //blueprint
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required(),
    });

    //validation [.validate is outdated from latest patch]
    // Joi.validate(req.body,schema,(err,result)=>{
    //     if(err){
    //         console.log(err)
    //         res.send('error has occured');
    //     }
    //     console.log(result)
    //     res.send('successdully posted data');
    // })

    const validation = schema.validate(req.body);
    if (validation.error) {
        res.send("something went wrong");
    }
    res.send("success");

});

app.listen('3000');
*/

/* tutorial 14 joi validation for array strings & objects
const Joi = require('joi');
const arrayString = ['banana','apple','mango'];
const arrayObject = [{example:'example1'},{example:'example2'}];

const userInput = { 
                    personalInfo:{ 
                        streetAddress: '122345678',
                        city: 'qwertyty',
                        state: 'fl',
                    }, 
                    preferences: arrayObject
                };


const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required(),
});
//array() give an array schema & items(Joi.string()) ensure all items in array are string
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required(),
}
));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

const validation = schema.validate(userInput);
    if (validation.error) {
        console.log(validation.error);
    }
console.log(validation.value);
*/

/* tutorial 15 ejs templatesd for dynamic website
const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine','ejs');

app.get('/:userQuery', (req, res) => {
    res.render('index',{data:{userQuery:req.params.userQuery,
                            searchResults : ['book1','book2','book3'],
                            loggedIn: true,
                            username: 'udqwibudqbd'
    }});
});

app.listen('3000');

*/

/* tutorial 16 middleware 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//check if user sent a json data & process it & attach to the req body
app.use(bodyParser.json());
//'next' tells express know i have finish processing this request
app.use((req,res,next)=>{
    req.banana='banana';

    next();
});

app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('Middleware');
});

app.listen('3000');
*/


//tutorial 17 express router
const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine','ejs');

const people = require('./routes/people');

app.use('/people',people);

app.listen(3000);