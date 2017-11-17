//1.sumOfSquares(num1, num2, num3)
function sumOfSquare(x,y,z){
    if(x==null || y==null || z==null){
        throw "Please give the input.";
    }else if(isNaN(x) || isNaN(y) ||isNaN(z)){
        throw "Input should be numerical.";            
    }else{
        let xSquare=Math.pow(x,2);
        let ySquare=Math.pow(y,2);
        let zSquare=Math.pow(z,2);
        return xSquare+ySquare+zSquare;
    }
}
console.log(sumOfSquare(5,3,10));



//2.sayHelloTo(firstName, lastName, title);
function sayHelloTo(firstName, lastName, title){
    if(firstName.constructor===String || lastName.constructor===String || title.constructor===String){
        if(firstName!=null || lastName!=null ||title!=null){
           if(lastName==undefined && title==undefined){
               console.log(`Hello, ${firstName}`);
           }else if(title==undefined){
               console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);     
           }else{
               console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);     
           }
        }else{
           throw "Please give the input."; 
        }
    }else{
        throw "Input should be String.";  
    }    
}
//sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil","Barresi");
sayHelloTo("Phil","Barresi","Mr.");


//3.cupsOfCoffee(howManyCups)
function cupsOfCoffee(howManyCups){
    let string="";
    if(howManyCups==null){
       throw "please give the input.";
    }else if(isNaN(howManyCups) || howManyCups<0){
       throw "Input should be numerical and greater than 0.";
    }else{
        for(let i=howManyCups;i>0;i--){
            if(i===1){
                string+=`${i} cup of coffee on the desk! ${i} cup of coffee!\nPick one up, drink the cup, no more coffee left on the desk!`;
            }else if(i===2){
                string+=`${i} cups of coffee on the desk! ${i} cups of coffee!\nPick one up, drink the cup, ${i-1} cup of coffee on the desk!\n\n`;
            }else{
                string+=`${i} cups of coffee on the desk! ${i} cups of coffee!\nPick one up, drink the cup, ${i-1} cups of coffee on the desk!\n\n`;
            }       
        } 
    }    
    return string;
}
console.log(cupsOfCoffee(5));


//4.occurrencesOfSubstring(fullString, substring)
function occurrencesOfSubstring(fullString, substring){
    if(fullString.length==null || substring.length==null){
        throw "Please give th input.";
    }   
    if(fullString.constructor!==String || substring.constructor!==String){
        throw "Input should be String.";
    }
    var count=0;
    var index=fullString.indexOf(substring);
    while(index!=-1){
        count++;
        index=fullString.indexOf(substring,index+1);
    }
    return count;
}
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));


//5.randomizeSentences(paragraph)
function randomizeSentences(paragraph) {
    var para = paragraph.match(/[^\.!\?]+[\.!\?]+/g);
    var len = para.length;

    if (len==null || len == 0 || paragraph.constructor!= String){
        throw "Please give th input and the input should be sentence.";
    }
    if( len == 1){
        return paragraph;
    }
    
    for (i = 0; i < len / 2; i++) {
        var n1 = Math.floor(Math.random() * 100) % len;
        var n2 = Math.floor(Math.random() * 100) % len;
        var temp = para[n1];
        para[n1] = para[n2];
        para[n2] = temp;
    }

    var result = "";
    for (i = 0; i < len; i++){
        result += para[i];
    }
    return result;         
}

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));


    
    