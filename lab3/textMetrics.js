function simplify(text){
    if(text===undefined || typeof text !=="string" || text ===""){
        throw "Error:text is not provided in simplify method.";
    }else{
        let string=text;
        string=string.trim().toLowerCase();  
        string=string.replace(/[\s]+/g," ");
        string=string.replace(/[^0-9a-zA-Z]/g," ");    
        string=string.replace(/[\s]+/g," ");
        return string;
    }           
}


function createMetrics (text){
    if(text===undefined || typeof text !=="string" || text ===""){
        throw "Error:text is not provided in createMetrics method.";
    }else{
        let newText=simplify(text);
        let totalLetters=0;
        let totalWords=0;
        let uniqueWords=0;
        let longWords=0;
        let averageWordLength=0;
        let wordOccurrences={};

        //longWords 
        let arr=newText.split(" ");
        for(let i=0;i<arr.length;i++){
            if(arr[i].length>=6){
               longWords++;                                
            }    
            totalWords=arr.length;
            let word=arr[i].split("");
            
            
            //totalLetters
            totalLetters+=word.length;
        }


        //averageWordLength
        averageWordLength=totalLetters/totalWords;                


        //uniqueWords
        let hashMap={};
        for(let i=0;i<arr.length;i++){
            if(hashMap[arr[i]]===undefined){
               hashMap[arr[i]]=1;
            }else{
               hashMap[arr[i]]++;
            }
        }
        var newArray=[];
        for(let key in hashMap){
            newArray.push(key);  
        }
        uniqueWords=newArray.length;                       


        //wordOccurrences
        for(let i=0;i<arr.length;i++){                     
            if(!wordOccurrences.hasOwnProperty(arr[i])){
                wordOccurrences[arr[i]]=1;  
            }else{
                wordOccurrences[arr[i]]++;
            }    
        } 

        
        let myObj={                                       
            totalLetters:totalLetters,
            totalWords:totalWords,
            uniqueWords:uniqueWords,
            longWords:longWords,
            averageWordLength:averageWordLength,
            wordOccurrences:wordOccurrences     
        };
        return myObj;   
    }
}
 
module.exports={simplify,createMetrics};







