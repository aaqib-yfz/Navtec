// var str = "my name is aaqib";
// console.log(str.length);
// console.log(str.indexOf("qazi"));
// console.log(str.lastIndexOf("m"));
// console.log(str.slice(11,16)); 
// var key= "aaqib";
// switch(str.indexOf(key)){
    
// // }
// if(str.indexOf(key)>0){
//     console.log(key);
// }
// else{
//     console.log("error");
// }
// switch(str.indexOf(key)){
//     case -1:
//         console.log(" NOT FOUND");
//     break;
//     default:
//         console.log("FOUND");
// }

//  I N D E X  O F

// for(i=0; i < data[0].sentence.length; i++){
//  switch(data[0].sentence[i].indexOf("this"))
//  {
//      case -1:
//          console.log("found");
//          break;
//     default:
//         console.log("not found");
//  }   

// }
// for(i=0; i<data.length; i++){
//         switch(data[i].sentence.indexOf("This"))
//         {
//             case -1:
//                 console.log("NOT FOUND ");
//                 break;
//             default:
//                 console.log("FOUND");
//                 break;
//         }
//     }

// E N D   O F  I N D E X


// S P L I T

//     for(var i=0; i<data.length; i++){
//         var prod =data[i].product.split(",");
        
//         for(var p = 0; p < prod.length; p++) {
//             console.log(prod[p])
//         }
// }
// var books =[
//     {
//         name: "Physics",
//         edition: "3rd",
//         publisher:"Urdu Bazar",
//         editor: "Gufam",
//         price: 2000,
//     },
        
//     {
//         name: "Chemistry",
//         edition: "6th",
//         publisher:"Kp Texbooks",
//         editor: "aaqib",
//         price: 3000,
//     },

//     {
//         name: "Maths",
//         edition: "2nd",
//         publisher:"islamia  Publishers",
//         editor: "sadiq",
//         price: 2000,

//     },

//     {
//         name: "English",
//         edition: "7th",
//         publisher:"Board Bazar",
//         editor: "Tayyab",
//         price: 2000,

//     },
// ]

// for(var i=0; i<books.length; i++){
//     console.log(books[i].name);
// }

// function square(n){
//     var s;
//     return s=n*n;
// }
// var i = 10;
// console.log(square(i));

// function arr_square(myArray){
//     for(var i=0; i<myArray.length; i++){
//         myArray[i]=array[i]*array[i];
        
//     }
    
    
// }
// var array=[10,20,30,40];
// arr_square(array);
// console.log(array);

// var data = [
//     {
//     name : "Zeeshan",
//     age : 89 ,
//     gpa : 2.7 ,
//     isStudent : true,
//     marks : [52,14,90,69],
//     sentence : "This is line 1.",
//     subjects : {
//         cpp : 12,
//         html : 50,
//         oops : 45,
//         python : 98,
        
//       },
//       product:" product 1,100,5000,7/8/2021",
// },
// {
//     name : "Kamran",
//     age : 25 ,
//     gpa : 3.7 ,
//     isStudent : false,
//     marks : [20,60,48,32],
//     sentence : " is sentence 2.",
//     subjects : {
//         cpp : 89,
//         html : 79,
//         oops : 45,
//         python : 78,
      
//     },
//     product:" product 2,200,6000,7/9/2021",
// } ,
// {
//     name : "Ihsan",
//     age : 20 ,
//     gpa : 3.7 ,
//     isStudent : true,
//     marks : [32,54,12,54],
//     sentence : " is sentence 3.",
//     subjects : {
//         cpp : 80,
//         html : 92,
//         oops : 40,
//         python : 48,
//     },
//     product:" product 3,300,7000,7/10/2021",
// }
// ]
// function markSquare(mArray){
//     for(var i=0; i< mArray.length; i++){    
//         mArray[i]=mArray[i]*mArray[i];
//     }
    
// }
// for(var j=0; j<data.length; j++){
//     var mArray= data[j].marks;
//     markSquare(mArray);
//     console.log(mArray);   
// }


// const sum = (a,b)=>  (a+b);
// var a=10;
// var b=20; 
// console.log(sum(a,b));

// const evenOdd=(a) => a%2==0 ? "even":"odd";
// console.log(evenOdd(a));


// const hello=(Name) => Name? `Hello ${Name}`:`Hello Guest`;
// var Name ="Asif";
// console.log(hello(Name))


// const books=()=>{
//     return( 
//         {
//             title:"c++",
//             author :"aaqib",
//         }
//     )
// }
// console.log(books().author);

// function sum (a,b){
// var c;
// c=a+b;
// return c;
// }
// var a=10;
// var b=20;
// console.log(sum(a,b));

// var sum = (a,b) => a+b; 

// a= 10;
// b=20;
// console.log(sum(a,b));

// var a =10;
// var b=20;
// // console.log("the value of a ="+ a);
// console.log(`The value of a = ${a}` )

// const books=()=>{
//     return(
//         {
//         title: "cpp",
//       author :"sadiq",
//         }  
//     )
// }
// console.log(books().author);