const printShape=require("./printShape");
const prompt=require("prompt");

var square=printShape.square;
var triangle=printShape.triangle;
var rhombus=printShape.rhombus;


for(var i=2;i<12;i++){
    try{
        square(i);
    }catch(err){
        console.error(err);
    } 
} 


for(var i=1;i<11;i++){
    try{
        triangle(i);
    }catch(err){
        console.error(err);
    }    
}

for(var i=2;i<=20;i=i+2){
    try{
        rhombus(i);
    }catch(err){
        console.error(err);
    }    
}

