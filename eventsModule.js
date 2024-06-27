const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const abhi = new MyEmitter();

abhi.on('WaterFull', ()=> {
  console.log("please switch off the motor");

  setTimeout(()=>{

    console.log("kar de bhai motor band")

  },3000)
});


console.log("other work is running");
abhi.emit('WaterFull');
console.log("other work is running");
