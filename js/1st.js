// var f,m,a;
// m=10;
// a=20;
// f = m * a;
// console.log(f);
// var students = {
//     student1: {
//     name: "aaqib",
//     gpa: 3.2,
//     marks:400,
//     subjects:{
//         python: 32,
//         cpp: 54,
//         java:41
//     }
//     },

//     student2: {
//     name: "anfal",
//     gpa: 3.3,
//     marks:500,
//     subjects:{
//         python: 50,
//         cpp: 70,
//         java:90
//     }
// }
// }
// console.log(students.student2.gpa)

//         WE ARE GONNA USE THIS IN FUTURE 
var students = [
    {
        name: "aaqib",
        gpa: 3.2,
        marks: 400,
        subjects: {
            python: 32,
            cpp: 54,
            java: 41,
        },
    },

    {
        name: "anfal",
        gpa: 3.3,
        marks: 500,
        subjects: {
            python: 50,
            cpp: 70,
            java: 90,
        },
    },
];

console.log(students[1].subjects.java);