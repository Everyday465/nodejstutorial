
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
 