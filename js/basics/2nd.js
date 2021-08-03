var data= [
    {
        name: "aaqib",
        isStudent: true,
        age: 19,
        gpa: 3.2,
        marks:[35, 59, 65, 98, 72],
        subjects: {
            python: 32,
            cpp: 54,
            java: 41,
        },
        sentence:"Aaqib is not a nice guy ",
    },

    {
        name: "anfal",
        isStudent: false,
        age: 21,
        gpa: 3.3,
        marks:[5, 79, 95, 88, 22],
        subjects: {
            python: 50,
            cpp: 70,
            java: 90,
        },
        sentence:"Anfal is a nice guy",
    },

    {
        name: "aizaz",
        age: 22,
        isStudent: true,
        gpa: 3.7,
        marks:[20, 40, 50, 60, 12],
        subjects: {
            python: 90,
            cpp: 50,
            java: 70,
        },
        sentence:"Aizaz is a nice guy",
    },

];
// for(var i =0; i< data.length; i++){
//     if(data[i].isStudent){
//         console.log(data[i].name);
//         console.log("*** M A R K S ***");
//         for(var m = 0; m<data[i].marks.length; m++){
//             console.log(data[i].marks[m]);
//         }    
//     }
    
//     }
    
// var i=0;
// while (i < data.length) {
//     console.log("Sentence " + data[i].sentence);
//     console.log('Length of sentence '+ i + '='+ data[i].sentence.length);
//     console.log('characters in sentence '+ i + '='+ data[i].sentence.split);
//     console.log(" ** ** **")
//     i++;
// }
var count=0; // for spaces
var vowel=0;
for(var i = 0; i < data[0].sentence.length; i++){

    // console.log(data[0].sentence.charAt(i));

if(data[0].sentence.charAt(i)== ' '){

    count ++;
}

if(data[0].sentence.charAt(i)== 'a' || data[0].sentence.charAt(i)== 'e'|| data[0].sentence.charAt(i)== 'i'|| data[0].sentence.charAt(i)== 'o'  || data[0].sentence.charAt(i)== 'u'){
    vowel++;
}

}
    console.log(count);
    console.log(vowel);
