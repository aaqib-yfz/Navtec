// var person ={
//     name:'khan',
//     age: 20,
//     walk(){
//         console.log( this.name +` person walks `);
//     }

// }



// function createPerson(name,age){
//     return{
//         name: name,
//         age:age,
//         walk(){
//             console.log(`person walks`);
//         }
//     };
// }
// var p1 = createPerson('khan',18);
// p1.walk();
// var p2=createPerson('aaqib',20);
// console.log(p2.age);



// function person(name,age){
//     this.name =name;
//     this.age=age;
//     this.walk =function()
//     {
//         console.log(this.name + ` walks `);
//     }
// }
// var p1 =new person('aaqib',15);
// console.log(p1);


// Manipulating Keys and Values of the objects
// var book={
//     title: `operating system`,
//     author:`khan`,
//     edition: `4th`,
//     price:200,
// }

// var b= Object.keys(book);
// console.log(b);

// var c= Object.values(book);
// console.log(c);

// var {title,author}=book;
// console.log(title);
// console.log(book[`title`]);


var a=[2,3,7];
var b=[6,8,9];
var c =a.concat(b);
console.log(c);


var d =[...a,...b];
console.log(d);

var f =c.map((n)=>n**2);
console.log(f);