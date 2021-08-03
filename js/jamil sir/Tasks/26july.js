// var person=[{
//     id:1,
//     display: function(){
//         console.log(this.id);
//     }
// },

// {
//     id :2,
//     display:function(){
//         console.log(this.id);
//     },
// },

// {
//     id:3,
//     display:function(){
//         console.log(this.id);
//     },
// },

// ]

// console.log(person[1].display())


class Computer{
    constructor(Cpu,ram){
        this.Cpu=Cpu;
        this.ram=ram;
    }
    turnon(){
        console.log(`Computer is turned on`)
    }
}

var c1 =new Computer(`Core i3`, `4Gb`);
console.log(c1.Cpu);

class laptop extends Computer{
    constructor(Cpu,ram,battery){
        super(Cpu,ram);
        this.battery=battery;
    }

}
var l1= new laptop(`corei3`,`2gb`,`4000mah`);
console.log(l1.battery);