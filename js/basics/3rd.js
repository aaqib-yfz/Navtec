//   S T R I N G S
var data = [
    {
    name : "Zeeshan",
    age : 89 ,
    gpa : 2.7 ,
    isStudent : true,
    marks : [32,54,12,54],
    sentence : "This is line 1.",
    subjects : {
        cpp : 12,
        html : 50,
        oops : 45,
        python : 98,
        
      }
},
{
    name : "Kamran",
    age : 25 ,
    gpa : 3.7 ,
    isStudent : false,
    marks : [32,54,12,54],
    sentence : "This is sentence 2.",
    subjects : {
        cpp : 89,
        html : 79,
        oops : 45,
        python : 78,
      
    }
} ,
{
    name : "Ihsan",
    age : 20 ,
    gpa : 3.7 ,
    isStudent : true,
    marks : [32,54,12,54],
    sentence : "This is sentence 3.",
    subjects : {
        cpp : 80,
        html : 92,
        oops : 40,
        python : 48,
    }
}
]

var spaces = 0;
var sentences = 0;
var vowels = 0;

var i = 0;
while(i<data.length){
        
    for( var c = 0; c < data[i].sentence.length; c++) {

        switch(data[i].sentence.charAt(c))
        {
            case ' ':
                spaces++;
                break;
            case '.':
                sentences++;
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels++;
        }
    }
    
    console.log("Sentence ("+(i+1)+"): " + data[i].sentence)
    console.log("Length ("+(i+1)+"): " + data[i].sentence.length)
    console.log("Spaces ("+(i+1)+"): " + spaces)
    console.log("Words ("+(i+1)+"): " + (spaces+1))
    console.log("Vowels ("+(i+1)+"): " + (vowels))

    console.log("Characters ("+(i+1)+"): " + (data[i].sentence.length - spaces))

    sentences=0;
    vowels=0;
    spaces =0;
    i++;
}

