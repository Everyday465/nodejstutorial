
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

const readStream = fs.createReadStream('./example.txt','utf8'); //reads data in chunks so it doesnt have to wait until all is read
const writeStream = fs.createWriteStream('example2.txt');
//readstream inherts the event listener module 
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})

*/