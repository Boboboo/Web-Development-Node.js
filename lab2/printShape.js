module.exports={
    square:function(num){
        if(num===undefined || typeof num!=="number"){
           throw "Please insert a number.";
        }

        for(let i=1;i<=num;i++){
            let s="";
            if(i==1 || i==num){
                for(let j=1;j<=num;j++){
                    s=s+"-";
                }  
            }else{
                for(let j=1;j<=num;j++){
                    s=s+" ";
                }
            }      
            console.log("|"+s+"|"); 
        }
        console.log();
    },

     
    triangle:function(num){
        if(num===undefined || typeof num!=="number"){
           throw "Please insert a number.";
        }
       
        for(let i=1;i<=num;i++){
            let s="";
            if(i===num){
               for(let j=1;j<=(num-1)*2;j++){
                   s=s+"-";   
               }
               console.log("/"+s+"\\");
            }else{   
               for(let j=1;j<=num*2;j++){
                   if(j===num-i+1){
                       s=s+"/";
                   }else if(j===num+i){
                       s=s+"\\";     
                   }else{
                       s=s+" ";
                   }

               }
               console.log(s);   
            }     
        } 
        console.log();
    },
    

    rhombus:function(num){
        if(num===undefined || typeof num!=="number"){
           throw "Please insert a number.";
        }

        for(let i=1;i<=num;i++){
            let s="";
            if(i===1){
               for(let j=1;j<=num+1;j++){
                   if(j===num/2){
                      s=s+"/";
                   }else if(j===num/2+1){
                      s=s+"-";
                   }else if(j===num/2+2){
                      s=s+"\\";
                   }else{
                      s=s+" ";
                   }    
               }
               console.log(s);     
            }else if(i===num){
                for(let j=1;j<=num+1;j++){
                   if(j===num/2){
                      s=s+"\\";
                   }else if(j===num/2+1){
                      s=s+"-";
                   }else if(j===num/2+2){
                      s=s+"/";
                   }else{
                      s=s+" ";
                   }  
               }
               console.log(s);     
            }else if(i>1 && i<=num/2){
               for(let j=1;j<=num+1;j++){
                    if(j===num/2-i+1){
                        s=s+"/";
                    }else if(j===num/2+i+1){
                        s=s+"\\";   
                    }else{
                        s=s+" ";
                    }
               }            
               console.log(s);       
            } else {
                for(let j=1;j<=num+1;j++){
                    if(j===i-num/2){
                        s=s+"\\";
                    }else if(j===3*num/2-i+2){
                        s=s+"/";   
                    }else{
                        s=s+" ";
                    }
                }    
                console.log(s);  
            } 
           
        }   
        console.log();
    }        
};

